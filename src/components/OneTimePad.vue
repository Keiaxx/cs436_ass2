<template>
    <v-container
            id="grid"
            fluid
            grid-list-sm
            tag="section"
    >
        <v-layout row wrap>
            <v-flex tag="h1" class="headline">One Time Pad (Encrypt Only as of 11:45PM 10/6/2018)</v-flex>
            <v-flex d-flex xs12 order-xs5>
                <v-layout column>
                    <v-flex>
                        <v-textarea
                                v-model="original"
                                color="teal"
                        >
                            <div slot="label">
                                Original Text
                            </div>
                        </v-textarea>
                    </v-flex>

                    <v-flex>
                        <v-combobox
                                v-model="select"
                                :items="items"
                                label="One Time Pad"
                                readonly
                        ></v-combobox>
                    </v-flex>

                    <v-flex>
                        <v-textarea
                                v-model="encrypted"
                                color="teal"
                                readonly
                        >
                            <div slot="label">
                                "Encrypted" Text
                            </div>
                        </v-textarea>
                    </v-flex>
                    <!-- If your source-code lives in a variable called 'sourcecode' -->

                    <v-dialog
                            v-model="dialog"
                            width="500"
                    >
                        <v-btn
                                slot="activator"
                                color="red lighten-2"
                                dark
                        >
                            Source Code
                        </v-btn>

                        <v-card>
                            <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                            >
                                Source Code
                            </v-card-title>

                            <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        flat
                                        @click="dialog = false"
                                >
                                    Close
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import OneTimePad from '@/classes/OneTimePad'
    import raw from '!raw-loader!@/classes/OneTimePad.js'

    export default {
        name: "OneTimePad",
        data() {
            return {
                dialog: false,
                original: '',
                encrypted: '',
                select: 'thequickbrownfoxjumpsoverthelazydog',
                items: ['thequickbrownfoxjumpsoverthelazydog'],
                sourcecode: ''
            }
        },
        methods: {
            range: function (start, end) {
                var foo = [];
                for (var i = start; i <= end; i++) {
                    foo.push(i);
                }
                return foo;
            },
            encryptText() {
                var cipher = new OneTimePad(this.select);
                this.encrypted = cipher.encrypt(this.original);
            },
            decryptText() {
                var cipher = new OneTimePad(this.select);
                this.original = cipher.decrypt(this.encrypted);
            }
        },
        watch: {
            select: function (value) {
                console.log(value)
                this.encryptText();
            },
            original: function (newtext, oldtext) {

                if (newtext.length > this.select.length) {
                    this.newtext = oldtext;
                    return;
                }
                this.encryptText();
            },
            encrypted: function (text) {
                //this.decryptText();
            }
        },
        mounted() {
            this.sourcecode = raw
        }
    }
</script>

<style scoped>

</style>
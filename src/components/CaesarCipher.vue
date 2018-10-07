<template>
    <v-container
            id="grid"
            fluid
            grid-list-sm
            tag="section"
    >
        <v-layout row wrap>
            <v-flex tag="h1" class="headline">Caesar Cipher</v-flex>
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
                                label="k - value (Number of characters to pad by)"
                        ></v-combobox>
                    </v-flex>

                    <v-flex>
                        <v-textarea
                                v-model="encrypted"
                                color="teal"
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
    import CaesarCipher from '@/classes/CaesarCipher'
    import rawCaesar from '!raw-loader!@/classes/CaesarCipher.js'

    export default {
        name: "CaesarCipher",
        data() {
            return {
                dialog: false,
                original: '',
                encrypted: '',
                select: 3,
                items: [1],
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
                var cipher = new CaesarCipher(this.original);
                this.encrypted = cipher.encrypt(this.select);
            },
            decryptText() {
                var cipher = new CaesarCipher(this.encrypted);
                this.original = cipher.decrypt(this.select);
            }
        },
        watch: {
            select: function (value) {
                console.log(value)
                this.encryptText();
            },
            original: function (text) {
                this.encryptText();
            },
            encrypted: function (text) {
                this.decryptText();
            }
        },
        mounted() {
            this.items = this.range(1, 26)
            console.log(this.items);
            this.sourcecode = rawCaesar
        }
    }
</script>

<style scoped>

</style>
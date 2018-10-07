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
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import CaesarCipher from '@/classes/CaesarCipher'
    export default {
        name: "CaesarCipher",
        data(){
            return{
                original: '',
                encrypted: '',
                select: 3,
                items: [1]
            }
        },
        methods: {
            range: function(start, end) {
                var foo = [];
                for (var i = start; i <= end; i++) {
                    foo.push(i);
                }
                return foo;
            },
            encryptText(){
                var cipher = new CaesarCipher(this.original);
                this.encrypted = cipher.encrypt(this.select);
            },
            decryptText(){
                var cipher = new CaesarCipher(this.encrypted);
                this.original = cipher.decrypt(this.select);
            }
        },
        watch: {
            select: function(value){
                console.log(value)
                this.encryptText();
            },
            original: function(text){
                this.encryptText();
            },
            encrypted: function(text){
                this.decryptText();
            }
        },
        mounted(){
            this.items = this.range(1,26)
            console.log(this.items);
        }
    }
</script>

<style scoped>

</style>
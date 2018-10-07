// (c) 2018 Adrian Gose
// This code is licensed under MIT license

class CaesarCipher{
    constructor(string){
        this.string = string;
    }

    encrypt(k){
        //Encrypted String
        var encrypted = "";

        for(var i = 0; i < this.string.length; i++) {
            //Get character at index
            var char = this.string.charCodeAt(i);


            if(char >= 97 && char <= 122) {
                //Check if characters are uppercase
                encrypted += String.fromCharCode((char - 97 + k) % 26 + 97);
            } else if(char >= 65 && char <= 90) {
                //Check if lowercase
                encrypted += String.fromCharCode((char - 65 + k) % 26 + 65);
            } else {
                //Any other character that is not A-Za-z
                encrypted += String.fromCharCode(char);
            }
        }
        return encrypted;
    }

    decrypt(k){
        return this.encrypt(k*-1+26);
    }
}

export default CaesarCipher;

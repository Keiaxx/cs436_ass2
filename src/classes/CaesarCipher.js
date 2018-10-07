class CaesarCipher{
    constructor(string){
        this.string = string;
    }

    encrypt(k){
        var encrypted = "";

        for(var i = 0; i < this.string.length; i++) {
            var char = this.string.charCodeAt(i);

            if(char >= 97 && char <= 122) {
                encrypted += String.fromCharCode((char - 97 + k) % 26 + 97);
            } else if(char >= 65 && char <= 90) {
                encrypted += String.fromCharCode((char - 65 + k) % 26 + 65);
            } else {
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

// (c) 2018 Adrian Gose
// This code is licensed under MIT license

class OneTimePad {
    constructor(otp_key) {
        //Strip whitespace
        this.key = otp_key.replace(/ /g, '').toUpperCase();
    }


    encrypt(originaltext) {
        var encrypted = "";

        //Strip whitespace
        originaltext = originaltext.replace(/ /g, '').toUpperCase();

        for (var i = 0; i < originaltext.length; i++) {
            var msgchar = originaltext[i].charCodeAt();
            var keychar = this.key[i].charCodeAt();

            //64 is charcode for A
            var calculatedChar = msgchar + keychar - (65);

            //90 is charcode for Z
            //If Z, go back 26 chars
            if (calculatedChar > 90) {
                calculatedChar = calculatedChar - 26;
            }

            encrypted = encrypted + String.fromCharCode(calculatedChar);

        }
        return encrypted;
    };

    decrypt(k) {
        //Not yet implemented
    }
}

export default OneTimePad;

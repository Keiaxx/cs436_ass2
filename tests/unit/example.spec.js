import {expect} from 'chai'

import CaesarCipher from '@/classes/CaesarCipher'

describe('CaesarCipher', () => {
    it('encrypts correctly', () => {

        var cipher = new CaesarCipher("hello world");

        var encrypted = cipher.encrypt(3);

        expect(encrypted).to.equal("khoor zruog")
    })

    it('decrypts correctly', () => {

        var cipher = new CaesarCipher("khoor zruog");

        var decrypted = cipher.decrypt(3);

        expect(decrypted).to.equal("hello world")
    })
})

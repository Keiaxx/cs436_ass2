import {expect} from 'chai'

import CaesarCipher from '@/classes/CaesarCipher'

import OneTimePad from '@/classes/OneTimePad'

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


describe('OneTimePad', () => {
    it('encrypts correctly', () => {

        var cipher = new OneTimePad("thequickbrownfoxjumpsoverthelazydog");

        var encrypted = cipher.encrypt("hello world");

        expect(encrypted).to.equal("ALPBIEQBMU")
    })
})

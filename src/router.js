import Vue from 'vue'
import Router from 'vue-router'
import CaesarCipher from './components/CaesarCipher'
import OneTimePad from './components/OneTimePad'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'caesarcipher',
            component: CaesarCipher
        },
        {
            path: '/otp',
            name: 'onetimepad',
            component: OneTimePad
        }
    ]
})

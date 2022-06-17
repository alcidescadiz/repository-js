import titulo from './components/titulo.js'
import {ejemplo} from './components/menu.js'

(()=>{

    document.addEventListener('DOMContentLoaded', ()=>{
        document.querySelector('body')
            .appendChild(titulo)
    })
    document.addEventListener('keypress', (e)=>{
        let expRg = /\d/
        console.log( `Its a Number?: ${expRg.test(e.key)}`)
    })



})()



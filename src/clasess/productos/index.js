/**
 * Script de Productos
 * @module Productos
 */

import {product} from './class.js'

for (let index = 0; index < document.querySelectorAll('#botones input').length; index++) {
    document.querySelector(`#hello${index}`).addEventListener('click', ()=>{
        let n= document.querySelector(`#hello${index}`).value
        product.hello(n)
    }) 
}

let malta = new product('Malta', 'Caracas', 100, true)
let cerveza = new product('Cerveza', 'Polar', 150, true)
let pepsi = new product('Pepsi', 'CocaCola', 50, true)
product.add_book(malta)
product.add_book(cerveza)
product.add_book(pepsi)
console.log(malta)
console.log(cerveza)
console.log(pepsi)
product.delete_book(2)
console.log(product.total_product())
console.log(product.book)







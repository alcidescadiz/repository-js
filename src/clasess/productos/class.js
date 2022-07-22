/**
 * Ejemplo de Clases
 * @module Clases
 */
export class product {
    static book = []
    static _id = 0
    constructor(name, marc, cost, imponible){
        this.name= name
        this.marc= marc
        this.cost = cost
        this.imponible= imponible
        this.iva = (()=>{
            if (this.imponible=== true) {
                return this.cost * 0.14
            }else{
                return 0
            }
        })()
        this.precio = this.cost + this.iva
        this.active = true
    }
    static hello(n){
        console.log(n)
    }
    static add_book(dato){
        ++this._id
        dato.id = this._id
        this.book.push(dato)
    }
    static delete_book(index){
        this.book.splice(index, 1)
        console.log(this.book)
    }
    static total_product(){
        return `Número total de productos ${this.book.length}`
    }
    getFullName(){
        console.log (`${this.name} ${this.marc} ${this.precio}`)
    }
}

let uno = new product('guayaba','fruta',5,true)
product.add_book(uno)
let dos = new product('manzana','fruta',6,true)
product.add_book(dos)
console.log(product.book)










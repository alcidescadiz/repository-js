/**
 * Funciones en Javascript
 * @module Funciones
 */

let colores = ['azul', 'todo lo que no quieres que pase','verde', 'morado', 'gris', 'en algun lugar del mundo', 'a']

/**
 * Frase o Palabra más larga
 * @param {Array<string>} array Lista de frases o palabras
 * @returns {string}
 * @example palabraMaslarga(['codificar','programar'])
 */
function palabraMaslarga(array) {
    let arrayNum= []
   array.forEach((e,i)=>{
    arrayNum.push({n: e.length, word: e})
   })
   return arrayNum.sort((a,b)=>b.n-a.n )[0].word
}

console.log(palabraMaslarga(colores))

/**
 * Determina si una palabra es un palindromo
 * @param {string} word Palabra a verificar
 * @returns {string}
 * @example palindrono('ana')
 */
function palindromo(word) {
    let x =Array.from(word).reverse().join('')
    if (word.toLowerCase() === x.toLowerCase()) {
        return 'Es un palindromo'
    } else {
        return 'No es un palindromo'
    }
    
}
console.log(palindromo('ana'))

let newSocket = new WebSocket('ws://127.0.0.1:5500/src/funciones/funciones.html')
newSocket.addEventListener('open',()=>{
    console.log('Conected')
})
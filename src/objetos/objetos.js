const { ValidarEsquema } = require("validaresquema")

/**
 * Ejemplod de Objetos en Javascript
 * @module Objetos
 */
let objeto= {
    uno: {
        nombre: 'alcides',
        alumno: true
    },
    dos: {
        nombre: 'javier',
        alumno: false
    },
    tres: {
        nombre: 'andres',
        alumno: true
    }
}
let { uno:{nombre: name, alumno:studnets} , dos , tres } = objeto 
console.log(name)
//let objeto = {}
objeto.nuevo = 0
console.log(objeto.hasOwnProperty('nuevo')) // true
delete objeto.nuevo
console.log(objeto.hasOwnProperty('nuevo')) // false
/**
 * Iterar un objeto
 */
let n = 0
for (const [key,values] of Object.entries(objeto)) {
   console.log(`${key}- ¿ ${values.nombre} es un alumno? Respuesta: ${values.alumno}`)
    if (values.alumno=== true) {
        n+=1
    }
} 
console.log(n)

/**
 * devolver los keys de un objeto en un array
 */

console.log(Object.keys(objeto))

/**
 * devolver los values d eun objeto  en un array
 */

console.log(Object.values(objeto))

/**
 * Person object
 * @type {{id: number | string, firstName: string, lastName: string, age: number}}
 */
 const person = {
    id: 1289,
    firstName: "Chapulin",
    lastName: "Colorado",
    age: 40
}


/**
 * Pet
 * @typedef {object} Pet
 * @property {string} name - The pet name
 * @property {number | string} age - The pet age
 * @property {string} type - The pet type
 * @property {string} [ability] - A pet ability
 * @property {boolean} isActive - An alives indicator
 */

 /**
  * @type {Pet}
  */
  const myPet = {
    name: "Pepe",
    age: 10,
    type: "dog",
    ability: "Ultra sleep",
    isActive: true
}
/// array de objetos unicos
let data = [
    { nombre: "alcides", edad: 21 },
    { nombre: "juan", edad: 21 },
    { nombre: "alcides", edad: 21 },
    { nombre: "juan", edad: 21 },
  ];
  
  let  hash = {};
  let array = data.filter(o => hash[o.nombre] ? false : hash[o.nombre] = true);
  console.log(array); 

import {ValidarEsquema, isImageValidate} from '../../node_modules/validaresquema/index.js'
console.log(ValidarEsquema([{ name: {value: 'luis', type:'string'}}]))

/**
 * destructurar
 */
let jsonFile = [{
    id:1,
    selector: 'esto es un selector',
    data1: {
        query: 'esto es una query',
        array2: [{uno: 1},2,3]
    }
}]

let { data1:{query:dos2, array2: [{uno:one}]}} = jsonFile[0]
console.log({ dos2, one})

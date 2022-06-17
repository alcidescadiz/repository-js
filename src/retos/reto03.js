/**
 * El Grinch está abriendo las cartas que iban a Santa Claus 
 * y las está dejando hechas un lío. 😱
 * Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
 * Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente
 * y que, además, no vayan vacíos.
 * ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis 
 * que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida 
y false si no lo es. ¡Y acaba con la travesura del Grinch!
 */

let letter = "bici coche (balón) bici coche peluche"
let  regexllave = /\{.+\}/ig  
let  regexparentesis = /\(.+\)/ig
let  regexcorchete = /\[.+\]/ig  
/**
 * / /  entre ellas se incluye la busqueda
 * . todo menos las lineas en blanco
 * \d todos los digitos 0-9
 * \B al inicio o al final \b 
 * \D todo menos los numeros
 * \w letras numeros y guion bajo
 * \W  el resto de simbolos
 * limites: ^ inicio  $final
 * Banderas:
 * i mayuscula y minuscula; 
 * g globa en todo el texto
 *  
 * */ 
/*
 *regresa un array con las coincidencias
 * letter.match(regexparentesis) 
 */

 /*
 * regresa un true o false si hay coincidencia en la busqueda
 *regresa un array con las coincidencias
 * regexllave.test(letter
 */
/*
function isValid(letter) {
    let e = letter
    let valid = []
        if (e.includes('(') || e.includes(')')) {
            valid.push(e.match(regexparentesis))
        }
        if (e.includes('[') || e.includes(']')) {
            valid.push(e.match(regexcorchete))
        }
        if (e.includes('{') || e.includes('}')) {
            valid.push(e.match(regexllave))
        }
    console.log(valid)
    let result = valid.includes(null)
    return !result

}

console.log(isValid(letter) )

let texto = '[{(]'
/**
 * 
 * @param {string} sequence 
 * @returns 
 /*
function solution(sequence) {
    let t = sequence
    while (t.includes('()')||t.includes('[]')|| t.includes('{}')) {
        t =t.replace('()', '')
        t= t.replace('[]', '')
        t= t.replace('{}', '')

        console.log(t) 
        console.log(t.includes('()')||t.includes('[]')|| t.includes('{}'))
    }
    if (  t.includes('()')
        ||t.includes('[]')
        ||t.includes('{}')) {
        return console.log(false)
    } else {
        return console.log(true)
    }
    
}
solution(texto)

function solution(a, b) {
    let count = 0
    let finding = true
    let pos
    b = b.split("")
    while (finding) {
  
      for (let i = 0; i < a.length; i++) {
        pos = b.indexOf(a[i])
        console.log(pos)
        if (pos >= 0) {
          b.splice(pos, 1)
        } else {
          finding = false
          break;
        }
      }
      if (finding) {
        count++;
        console.log(count)
      }
    }
    return console.log(count)
  }
  solution('abc', 'ctherythabcawrthbceryheyab')
*/
//------------------------------------------------------------------------------
/**
 * Menor distancia entre varios puntos
 */
/**
 * @type {Array<number>} Lista de puntos
 */
let p = [[3,4], [1,-1]]
/**
 * Determinar en una lista de de puntos la distancia menor posible
 * @param {Array<number>} p p.length >= 1
 * @returns {number} Distancia minima entre dos puntos
 * @example solution([[3,4], [5,4], [3,-2]])
 */
function solution(p) {
    if (p.length===1) {
        p = [[0,0], p[0]]
    }
    let dist = []
    for (let i = 0; i < p.length; i++) {
        for (let e = 0; e < p.length; e++) {
            dist.push([p[e+i+1],p[i]])
        }
    }
    dist = dist.filter(e=> e[0] != undefined)
    dist = dist.map((e,i)=> dE2p(e[0],e[1]))
    dist = Math.min(dist)
    console.log( dist)
    return dist
}

function dE2p(pto2,pto1){
    let x = (pto2[0]-pto1[0])**2
    let y = (pto2[1]-pto1[1])**2
    return Math.sqrt(x+y)
}
solution(p)

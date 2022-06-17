/**
 * ¡Es hora de poner el árbol de navidad en casa! 🎄
 * Para ello vamos a crear una función que recibe la altura del árbol, 
 * que será un entero positivo del 1 a, como máximo, 100.
 * Si le pasamos el argumento 5, se pintaría esto:
 *  ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____

    Ten en cuenta que el árbol es un string 
    y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
 */

function createXmasTree(h) {
    // ¡Y no olvides también poner los turrones!
    let line = ''
    let asterisco = '*'
    let piso ='_'
    for (let i = 1; i < h+1; i++) {
        line += `${piso.repeat((h+1)-i)}${asterisco.repeat(1+(i-1)*2)}${piso.repeat((h+1)-i)}\n` 
    }
    let base = '#'
    line += `${piso.repeat(h)}${base.repeat(1)}${piso.repeat(h)}\n` 
    line += `${piso.repeat(h)}${base.repeat(1)}${piso.repeat(h)}` 
    return console.log(line)
}

createXmasTree(20)
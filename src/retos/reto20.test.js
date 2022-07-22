/**
 * En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

Vamos a ver unos ejemplos de frases:
 */
//  npm run test
function pangram(letter) {
    let abecedario = [' ','a','b', 'c', 'd','e', 'f', 'g', 'h', 'i',
                        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
                       'r', 's', 't', 'u','v','w', 'x', 'y', 'z']
    let transforn = letter.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[:!¡¿?,.;""{}()&%$#1234567890°|\-\_]/g, "")
    .split('')
    let result = abecedario.map(e => transforn.includes(e)).includes(false)
     return !result
}

test('prueba 1', ()=>{
    let letter= 'Extraño pan de col y kiwi se quemó bajo fugaz vaho'
    expect(pangram(letter)).toBe(true)
})

test('prueba 2', ()=>{
    let letter2= 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'
    expect(pangram(letter2)).toBe(true)
})

test('prueba 3', ()=>{
    let letter3= 'Esto es una frase larga pero no tiene todas las letras del abecedario'
    expect(pangram(letter3)).toBe(false)
})

test('prueba 4', ()=>{
    let letter4= 'De la a a la z, nos faltan letras'
    expect(pangram(letter4)).toBe(false)
})



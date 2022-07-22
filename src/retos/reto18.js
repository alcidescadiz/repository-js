/**
 * Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró repetido.

Lo mejor es que veamos un ejemplo:
 */

function fixFiles(files=[]) {
    let repetidos={}, result = []
    files.forEach((e,i) => {
        repetidos[e]= repetidos[e] === undefined ? [i] :[...repetidos[e], i]
    });
    Object.entries(repetidos).forEach(e =>{
        e[1].forEach((a,i)=>{
            result[a] = e[1].length > 1 && i > 0 ?  e[0]+ `(${i})` : e[0]
        })
    })
    console.log(repetidos )
    console.log(result)
     return result
}
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!

const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
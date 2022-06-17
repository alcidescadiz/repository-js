/**
 * Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
 * El tema es que es una cadena de texto y es muy difícil de leer 😱. 
 * ¡Menos mal que han puesto cada regalo separado por espacio!
 *  (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
 * Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, 
 * por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
 * Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
 *  Por ejemplo, si tenemos el texto:
 */

 const carta = 'bici coche balón _play_station bici coche peluche'

 function listGifts(carta) {
    // ¡Tú puedes!
    carta = carta.split('').map(e=> e.replace(/^_/,""))  // /^_/  exp reg q indica q el piso bajo solo este al inicio
    let resultado = {}
    carta.forEach(e => (resultado[e] = resultado[e] + 1 || 1))
    return resultado
   }
 const regalos = listGifts(carta)

console.log(regalos)

/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

class prueba {
  constructor(uno, dos){
    this._uno = uno
    this._dos = dos
  }
  get uno(){
    return this._uno
  }
}
let dato = new prueba(1,2)
console.log(dato.uno)
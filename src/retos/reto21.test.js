/**
 * Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

Para eso vamos a crear una función que recibe dos parámetros:

Un número con la capacidad máxima de regalos en el trineo.
El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
trip[0] = número de regalos a transportar
trip[1] = punto de recogida de los regalos
trip[2] = punto de entrega de los regalos
La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!

Lo difícil, e importante, es que entiendas que Santa Claus va entregando y recogiendo regalos y que a veces eso puede hacer que supere la carga máxima.

Lo mejor es que veamos un ejemplo:
 */

function canCarry(capacity, trip = []) {
    let array = []
    trip.map(e=> {
        array.push([e[1],'r', e[0]])
        array.push([e[2],'e', e[0]])
    })
    let cargaTotal= array.sort((e,a)=> e[0]-a[0])
    let total = 0
    for (let index = 0; index < cargaTotal.length; index++) {
        if (cargaTotal[index][1]=== 'r') {
            total += cargaTotal[index][2]
        }else{
            total -= cargaTotal[index][2]
        }
        if ((total > capacity)){
            return false;
        }
    }
    return true
}
test("prueba 1", () => {
  expect(
    canCarry(4, [
      [2, 5, 8],
      [3, 6, 10],
    ])
  ).toBe(false);
});
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

test("prueba 2", () => {
  expect(
    canCarry(3, [
      [1, 1, 5],
      [2, 2, 10],
    ])
  ).toBe(true);
});
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

test("prueba 3", () => {
  expect(
    canCarry(3, [
      [2, 1, 5],
      [3, 5, 7],
    ])
  ).toBe(true);
});
// true -> nunca supera el máximo de capacidad

test("prueba 4", () => {
  expect(
    canCarry(4, [
      [2, 3, 8],
      [2, 5, 7],
    ])
  ).toBe(true);
});
// true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

test("prueba 5", () => {
  expect(canCarry(1, [[2, 3, 8]])).toBe(false);
});
// false -> no podría ni con el primer viaje

test("prueba 6", () => {
  expect(
    canCarry(2, [
      [1, 2, 4],
      [2, 3, 8],
    ])
  ).toBe(false);
});
// false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos

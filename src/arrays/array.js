/**
 * Arrays en javascript
 * @module Arrays
 */

let numeros = [1, 15, 3, 4, 53, 6, 7, 8, 9, 10];

/**
 * Itera el valor de cada elemento del array
 */
console.log("for of");
for (const e of numeros) {
  console.log(`Posición: Valor: ${e} `);
}

/**
 * Itera la posicion de cada elemento del array
 */
console.log("for in");
for (const i in numeros) {
  console.log(`Posición: ${i}  Valor: `);
}

/**
 * Itera un array devolviendo pocisión y valor de cada elemento
 */
console.log("for each");
numeros.forEach((e, i) => {
  console.log(`Posición:  ${i}  Valor: ${e}`);
});

/**
 * Itera un array devolviendo pocisión y valor de cada elemento
 */
console.log("for of full");
for (const [i, e] of numeros.entries()) {
  console.log(`Posición: ${i} Valor: ${e} `);
}

/**
 * Filter regresa todos los que cumplan una condición
 */
console.log(numeros.filter((e) => e > 4));
console.log(numeros);

/**
 * Find regresa un solo elemento que cumpla con la condición
 */
let busca = 3;
numeros.find((e, i) => {
  if (e === busca) {
    return console.log(`El valor buscado es: Posición: ${i}  Valor: ${e}`);
  }
});

/**
 * reduce  suma todos los elementos de un array
 */

console.log(numeros.reduce((a, e) => a + e));

/**
 * sort  ordena el array
 */
//  numeros
console.log(numeros.sort((a, e) => a - e));

let colores = ["azul", "verde", "morado", "gris"];
// alfabeto
console.log(
  colores.sort((a, b) => {
    const nameA = a.toUpperCase(); // ignore upper and lowercase
    const nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  })
);

console.log(colores.includes("verde"));

/**
 * filtrar un array con datos de otro array
 */
let p = [1, 4];
let ao = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

let n = ao.filter((e) => p.includes(e.id));
console.log(n);



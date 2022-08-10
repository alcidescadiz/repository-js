/**
 * Funciones en Javascript
 * @module Funciones
 */

let colores = [
  "azul",
  "todo lo que no quieres que pase",
  "verde",
  "morado",
  "gris",
  "en algun lugar del mundo",
  "a",
];

/**
 * Frase o Palabra más larga
 * @param {Array<string>} array Lista de frases o palabras
 * @returns {string}
 * @example palabraMaslarga(['codificar','programar'])
 */
function palabraMaslarga(array) {
  let arrayNum = [];
  array.forEach((e, i) => {
    arrayNum.push({ n: e.length, word: e });
  });
  return arrayNum.sort((a, b) => b.n - a.n)[0].word;
}

console.log(palabraMaslarga(colores));

/**
 * Determina si una palabra es un palindromo
 * @param {string} word Palabra a verificar
 * @returns {string}
 * @example palindrono('ana')
 */
function palindromo(word) {
  let x = Array.from(word).reverse().join("");

  if (word.toLowerCase() === x.toLowerCase()) {
    return "Es un palindromo";
  } else {
    return "No es un palindromo";
  }
}
console.log(palindromo("ana"));

let newSocket = new WebSocket(
  "ws://127.0.0.1:5500/src/funciones/funciones.html"
);
newSocket.addEventListener("open", () => {
  console.log("Conected");
});

/**
 * encontrar el par de multiplicacion con el valor mayor
 */
function solution(inputArray = []) {
  if (inputArray.length < 2 || inputArray.length > 10) return null;
  let test = inputArray
    .map((e) => {
      if (e >= -1000 || e <= 1000) return true;
    })
    .includes(false);
  console.log({ test });
  if (test === true) return null;
  let output = inputArray
    .map((e, i) => {
      let pair =
        typeof (e * inputArray[i + 1]) != NaN ? e * inputArray[i + 1] : 0;
      return pair;
    })
    .sort((a, b) => b - a);
  console.log(output);
  return output[0];
}
console.log(solution([-23, 2]));

/**
 *  sucesion 1,5,13,25...
 */
function solution(n) {
  if (n < 1 || n >= 10 ** 4) return null;
  let num = (n - 1) ** 2 + n ** 2;
  return num;
}
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));

/**
 * ordenar numeros e indicar faltantes
 * 1 ≤ statues.length ≤ 10,
 * 0 ≤ statues[i] ≤ 20.
 */
function solution(statues) {
  if (statues.length < 1 || statues.length > 10) return null;
  let ordenado = statues.sort((a, b) => a - b);
  let first = ordenado[0];
  let ultimo = ordenado[statues.length - 1];
  let comparar = [];
  for (let index = 0; index < ultimo - first + 1; index++) {
    comparar.push(first + index);
  }
  let result = [];
  for (let index = 0; index < comparar.length; index++) {
    result.push(ordenado.includes(ordenado[index]));
  }
  return result.filter((e) => e === false).length;
}
let statues2 = [0, 3];
console.log(solution(statues2)); //2

let statues = [6, 2, 3, 8];
console.log(solution(statues)); //3

let statues3 = [5, 4, 6];
console.log(solution(statues3)); //0

let statues4 = [6, 3];
console.log(solution(statues4)); //2

let statues5 = [2];
console.log(solution(statues5)); //0

/**
 * garantizar la secuencia de numeros quitando solo un numero
 * 2 ≤ sequence.length ≤ 105,
 * -105 ≤ sequence[i] ≤ 105
 */

function solution(sequence) {
  if (sequence.length < 2 || sequence.length > 10 ** 5) return null;
  let found = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      found++;
      if (found > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  }
  return true;
}

console.log(solution([1, 3, 2, 1])); // false
console.log(solution([1, 3, 2])); // true
console.log(solution([1, 2, 1, 2])); // false
console.log(solution([3, 6, 5, 8, 10, 20, 15])); // false
console.log(solution([1, 1, 2, 3, 4, 4])); // false
console.log(solution([1, 4, 10, 4, 2])); // false
console.log(solution([10, 1, 2, 3, 4, 5])); // true
console.log(solution([0, -2, 5, 6])); // true
console.log(solution([1, 2, 5, 3, 5])); // true
console.log(solution([1, 2, 3, 4, 99, 5, 6])); // true
console.log(solution([123, -17, -5, 1, 2, 3, 12, 43, 45])); // true
console.log(solution([40, 50, 60, 10, 20, 30])); // false

/**
 * useState
 */

let useState = (prop)=>{
      let inicial = prop
      let State= () => inicial
      let getState= (dato)=>{
      inicial = dato
      }  
  return [ State , getState ]
}

let [ num, setNum] =  useState(0)
console.log({num :num()})
setNum(5)
console.log({num :num()})


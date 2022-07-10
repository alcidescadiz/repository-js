// let N = 0
// let Suma = 0

// while (N <= 10) {
//     N = N+1
//     Suma = Suma + N
// }
// do {
//     N = N+1
//     Suma = Suma + N
// } while (N <= 10);

// console.log(Suma)

// function Matriz(M, N) {
//   let matriz = []
//   for (let index = 0; index < M; index++) {
//     matriz.push([])
//     for (let cols = 0; cols < N; cols++) {
//         matriz[index][cols] = Math.floor(Math.random()*100)
//     }
//   }
//   console.log(matriz);
// }

// Matriz(5, 7);

// let b = [
//   "https://www.itdo.com/blog/como-descargar-javascript/",
//   "https://webcache.googleusercontent.com/search?q=cache:IsaTAgGD6doJ:https://www.itdo.com/blog/como-descargar-javascript/+&cd=1&hl=es-419&ct=clnk&gl=mx",
//   "https://javascript-collector.softonic.com/descargar",
//   "https://webcache.googleusercontent.com/search?q=cache:0lR0LgdrE90J:https://javascript-collector.softonic.com/descargar+&cd=2&hl=es-419&ct=clnk&gl=mx",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=0",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=15",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=43",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=138",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=155",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=248",
//   "https://www.youtube.com/watch?v=BpOGisxyN7Y&t=325",
// ];

// console.log(b[0].includes('youtube'))
// console.log(b[5].includes('youtube'))

// let c = b.filter(e => !e.includes("youtube"))
// console.log(c)

import {ValidarEsquema} from 'validaresquema'

//const {ValidarEsquema} = require('validaresquema')

function Constructor(nombre, edad, email, activo) {
  return [
    {
      nombre: {
        value: nombre,
        type: "string",
        empty: false,
        min: 4,
        max: 8,
        msg: 'Nombre no valido'
      },
      edad: {
        value: edad,
        type: "number",
        empty: false,
        max: 110,
        min: 16
      },
      email: {
        value: email,
        type: "email",
        empty: false,
      },
      activo: {
        value: activo,
        type: "boolean"
      },
    },
    {
      timeStamp: false,
    },
  ];
}

ValidarEsquema(Constructor('alcides', 20, "mail@mail.com", true));
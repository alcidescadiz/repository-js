/**
 * ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...
wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

//wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

//wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

export default function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  let n = gifts[0].length / 2;
  let regalos = gifts.map((e) => `*${e}*`);
  let envoltura = [
    `*${"*".repeat(n * 2)}*`,
    ...regalos,
    `*${"*".repeat(n * 2)}*`,
  ];
  console.log(envoltura);
  return envoltura;
}

wrapGifts(["📷", "⚽️"]);
wrapGifts(["🏈🎸", "🎮🧸"]);
wrapGifts(["📷"]);

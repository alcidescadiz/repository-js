/**
 * Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
 */
// @ts-check
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
/**
 * 
 * @param {Array<number>} prices 
 * @returns {number} total ganancia
 */
function maxProfit(prices) {
  let arrCompra = prices.slice(0, 2);
  let valorCompra = Math.min(...arrCompra);
  let arrVenta = prices.slice(2,prices.length);
  let valorVenta = Math.max(...arrVenta)
  if(valorVenta <= valorCompra){ 
      return -1
  }
  console.log([valorCompra,valorVenta].reduceRight((acc,current) => acc-current))
  return [valorCompra,valorVenta].reduceRight((acc,current) => acc-current)

    /*let difference = 0;
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] - prices[i] > difference) {
          difference = prices[j] - prices[i];
        }
      }
    }
    console.log(difference !== 0 ? difference : -1)
    return difference !== 0 ? difference : -1;*/
  }

//maxProfit(pricesDoge)
//maxProfit(pricesAda)
//maxProfit(pricesBtc)
maxProfit(pricesEth) 
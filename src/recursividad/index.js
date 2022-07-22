function arraySuma(array=[], acc=0) {
    let sum = acc + array[0]
    array.splice(0,1)
    if(array.length===0) return sum
    return arraySuma(array, sum)
}

console.log(arraySuma([1,2,3,4,10]))

function enumerar(n=0) {
    console.log(n)
    n--
    if(n===0) return
    enumerar(n)
}
enumerar(5)

function factorial(n=0, acc=1) {
    let result = acc * n 
    n--
    if (n===1) return result
    return factorial(n, result)
}
console.log(factorial(10))

function fibonacci(uno = 0, dos = 1, tres= 1) {
    let cuatro = dos + tres
    console.log(uno)
    if(uno > 60) return cuatro
    fibonacci(dos, tres, cuatro)
}
fibonacci()

let result = {}
function fibonacciN(n) {
    if (n <= 1) {
        return n
    }else{
        if (result[n]) return result[n]
        result[n] = fibonacciN(n-1)+fibonacciN(n-2)
        console.log(result[n])
        return fibonacciN(n-1)+fibonacciN(n-2)
    }
}
fibonacciN(15)
fibonacciN(16)
console.log(result)


let numeros = {
    1: (n)=> console.log(`funcion 1 ${n}`),
    2: (n)=> console.log(`funcion 2 ${n}`),
    3: (n)=> console.log(`funcion 3 ${n}`),
    4: (n)=> console.log(`funcion 4 ${n}`)
}
let num = [1,3,2,4]
num.forEach((e,i) => {
    numeros[e](i)
});
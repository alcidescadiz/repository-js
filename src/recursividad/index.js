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
let array1 = [143,781,123,42,878,536]
let array2 = [19,49,781,123,49,878,76,456,496,43,64,39,46,36]

let detector = (array, bomb)=>{
    let newArray=[]
    array.forEach(e=>{
        let dato = ''+ e
        newArray.push(...dato.split(''))
    })
    let result = (newArray.includes(`${bomb}`))? 'Bomb!!!!' :'Quiet no Danger'
    console.log(result)
    return result
}

detector(array1, '9')
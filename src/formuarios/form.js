let data = document.querySelector('#data')
let name = document.querySelector('#Name')
let Email = document.querySelector('#Email')
let Telephone = document.querySelector('#Telephone')
let cathData= {}


/**
 * Regex validate
 */
let  regexName = /\w{4,15}/ig 
function isName(name){
    return regexName.test(name)
}
let  regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
function isEmail(Email){
    return regexEmail.test(Email)
}
let  regexTelephone = /^\d{11}/
function isTelephone(Telephone){
    return regexTelephone.test(Telephone)
}
function clear(){
    Name.value=''
    Email.value=''
    Telephone.value=''
}

data.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (isName(Name.value) && isEmail(Email.value) && isTelephone(Telephone.value)) {
        cathData = {
            name : Name.value,
            email: Email.value,
            telephone: Telephone.value
        }
        console.log(cathData)
        clear()
    }else{
        console.log('Entradas erroneas')
    }
})


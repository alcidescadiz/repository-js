export default function validate(nombre, edad, email){
    nombre= typeof nombre === 'string' && nombre != '' && nombre.length >= 4 ? true : false 
    edad = typeof edad === 'number' && edad != '' ? true : false
    email = typeof email === 'string' && email != '' ? true : false

    if (nombre && edad && email) {
        return { validation  : true }
    }else{
        let msgValidado = 'Campo con validación correcta'
        let msg= []
        let msgNombre = {
            nombre: nombre ? msgValidado : 'Campo tipo String requerido, mínimo 4 letras'
        }
        let msgEdad = {
            edad: edad ? msgValidado : 'Campo tipo Number requerido'
        }
        let msgEmail = {
            email: email ? msgValidado : 'Campo tipo String requerido'
        }
        !nombre ? msg.push(msgNombre): null 
        !email ?  msg.push(msgEmail): null
        !edad ? msg.push(msgEdad) : null
        return {validation : false, msg}
    }
}
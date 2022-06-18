function isEmail(email){
    const ExpRegularEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    return ExpRegularEmail.test(email)
}

function isPassword(password){
    const ExpRegularPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/
    return ExpRegularPassword.test(password)
}

export default function validate(username, nombre, edad, email, password){

    username= typeof username === 'string' && username != '' && username.length >= 4 ? true : false 
    nombre= typeof nombre === 'string' && nombre != '' && nombre.length >= 8 ? true : false 
    password= typeof password === 'string' && password != '' && password.length >= 8  && isPassword(password)? true : false 
    edad = typeof edad === 'number' && edad != ''  ? true : false
    email = typeof email === 'string' && email != '' && isEmail(email) ? true : false

    if (nombre && edad && email && password && username) {
        return { validation  : true }
    }else{
        let msgValidado = 'Campo con validación correcta'
        let msg= []
        let msgUsername = {
            username: username ? msgValidado : 'Campo tipo String requerido, mínimo 4 letras'
        }
        let msgNombre = {
            nombre: nombre ? msgValidado : 'Campo tipo String requerido, mínimo 8 letras'
        }
        let msgEdad = {
            edad: edad ? msgValidado : 'Campo tipo Number requerido'
        }
        let msgEmail = {
            email: email ? msgValidado : 'Campo tipo String requerido'
        }
        let msgPassword = {
            password: password ? msgValidado : 'Campo tipo String requerido mínimo 8 caracteres, máximo 15 caracteres al menos una letra mayúscula, al menos un número, al menos un carácter especial [$, @, ?, %, &, !] '
        }
        !username ? msg.push(msgUsername): null 
        !nombre ? msg.push(msgNombre): null 
        !email ?  msg.push(msgEmail): null
        !edad ? msg.push(msgEdad) : null
        !password ? msg.push(msgPassword) : null
        return {validation : false, msg}
    }
}
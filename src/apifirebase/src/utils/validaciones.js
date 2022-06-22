function isEmail(email) {
  const ExpRegularEmail =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return ExpRegularEmail.test(email);
}

function isPassword(password) {
  const ExpRegularPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
  return ExpRegularPassword.test(password);
}

function isEmpty(campo) {
  let dato = campo !== "" ? true : false;
  return dato;
}
function isString(campo) {
  let dato = typeof campo === "string" ? true : false;
  return dato;
}

export function isImageValdate({originalname , size}){
  let extFile = originalname.split('.')[1]
  if(extFile === 'jpg' || extFile === 'jpeg'|| extFile === 'png' || size >= 800000){
    return { validation: true, msg: 'Tipo de archivo valido' };
  }else{
    return { validation: false, msg: 'Tipo de archivo no valido o tamaño muy pesado' };
  }
}

export default function validate({username, nombre, edad, email, password}) {
  username =
    isString(username) && isEmpty(username) && username.length >= 4
      ? true
      : false;
  nombre =
    isString(nombre) && isEmpty(nombre) && nombre.length >= 8 ? true : false;
  password =
    isString(password) &&
    isEmpty(password) &&
    password.length >= 8 &&
    isPassword(password)
      ? true
      : false;
  edad = typeof edad === "number" && isEmpty(edad) ? true : false;
  email = isString(email) && isEmpty(email) && isEmail(email) ? true : false;

  if (nombre && edad && email && password && username) {
    return { validation: true };
  } else {
    let msgValidado = "Campo con validación correcta";
    let msg = [];
    let msgUsername = {
      username: username
        ? msgValidado
        : "Campo tipo String requerido, mínimo 4 letras",
    };
    let msgNombre = {
      nombre: nombre
        ? msgValidado
        : "Campo tipo String requerido, mínimo 8 letras",
    };
    let msgEdad = {
      edad: edad ? msgValidado : "Campo tipo Number requerido",
    };
    let msgEmail = {
      email: email ? msgValidado : "Campo tipo String requerido",
    };
    let msgPassword = {
      password: password
        ? msgValidado
        : "Campo tipo String requerido mínimo 8 caracteres, máximo 15 caracteres al menos una letra mayúscula, al menos un número, al menos un carácter especial [$, @, ?, %, &, !] ",
    };
    !username ? msg.push(msgUsername) : null;
    !nombre ? msg.push(msgNombre) : null;
    !email ? msg.push(msgEmail) : null;
    !edad ? msg.push(msgEdad) : null;
    !password ? msg.push(msgPassword) : null;
    return { validation: false, msg };
  }
}

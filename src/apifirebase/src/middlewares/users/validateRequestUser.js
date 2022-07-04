import validate from "../../utils/validaciones.js";

const validateRequestUser = async (req, res, next) => {
  try {
    if (req.body.usernameNew) {
        const {
            usernameNew: username,
            nombreNew: nombre,
            emailNew: email,
            edadNew: edad,
            passwordNew: password,
          } = req.body;
          let validar = validate({ username, nombre, edad, email, password });  
          if (validar.validation) {
            next();
          } else {
            res.status(400).send(validar.msg);
          }
    }else{
        let validar = validate({ ...req.body });
        if (validar.validation) {
            next();
          } else {
            res.status(400).send(validar.msg);
          }
    }
    
  } catch (error) {
    return res.send({ mensaje: error.message });
  }
};

export default validateRequestUser;

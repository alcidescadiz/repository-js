import { ValidarEsquema } from "validaresquema";
import { UserEsquema } from "../../models/user.js";

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
      let user = ValidarEsquema(
        UserEsquema(username, nombre, edad, email, password),
        "update"
      );
      if (user.Result === "Validate") {
        req.user = user.Response;
        next();
      } else {
        res.status(400).send(user);
      }
    } else {
      let { username, nombre, edad, email, password } = req.body;
      let user = ValidarEsquema(
        UserEsquema(username, nombre, edad, email, password),
        "create"
      );
      if (user.Result === "Validate") {
        req.user = user.Response;
        next();
      } else {
        res.status(400).send(user);
      }
    }
  } catch (error) {
    return res.send({ mensaje: error.message });
  }
};

export default validateRequestUser;

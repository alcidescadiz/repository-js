// firebase
import db from "../firebase/config.js";
import {
  collection as Collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { validateLogin } from "../utils/validaciones.js";
let nameCollection = "usuarios";
let Usuarios = Collection(db, nameCollection);

const validarUsuario = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    let validar = validateLogin({ username, password, email });
    if (validar.validation) {
      const getUsuario = await getDocs(
        query(Usuarios, where("email", "==", email))
      );
      const datosUsuario = getUsuario.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      let existUsername = datosUsuario[0]?.username === username ? true : false;
      let existPassword = datosUsuario[0]?.password === password ? true : false;
      let existEmail = datosUsuario[0]?.email === email ? true : false;

      if (existUsername && existPassword && existEmail) {
        next();
      } else {
        return res.send({ mensaje: "Error no tienes autorización" });
      }
    } else {
      res.status(400).send(validar.msg);
    }
  } catch (error) {
    return res.send({ mensaje: error.message });
  }
};
export default validarUsuario;

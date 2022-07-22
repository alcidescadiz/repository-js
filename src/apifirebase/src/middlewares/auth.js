// firebase
import db from "../firebase/config.js";
import {
  collection as Collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const KEY = process.env.KEY;
let nameCollection = "usuarios";
let Usuarios = Collection(db, nameCollection);


const validarUsuario = async (req, res, next) => {

  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send("No se ha enviado el token de autenticación");
    }
    const decoded = jwt.verify(token, KEY);

    const getUsuario = await getDocs(
      query(Usuarios, where("email", "==", decoded?.email))
    );
    const datosUsuario = getUsuario.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    let existUsername =
      datosUsuario[0]?.username === decoded?.username ? true : false;
    let existPassword =
      datosUsuario[0]?.password === decoded?.password ? true : false;
    let existEmail = datosUsuario[0]?.email === decoded?.email ? true : false;

    if (existUsername && existPassword && existEmail) {
      next();
    } else {
      return res.send({
        mensaje: "Error no tienes autorización o token invalido",
      });
    }
  } catch (error) {
    return res.send({ mensaje: error.message });
  }
};
export default validarUsuario;

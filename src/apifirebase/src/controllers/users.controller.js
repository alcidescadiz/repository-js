import validate, { isImageValdate } from "../utils/validaciones.js";
import { User } from "../models/user.js";
import {
  createDocDatabase,
  deleteDocumentDatabase,
  doLogin,
  getAllDatabase,
  getOneDatabase,
  getWhereDatabase,
  isEmailUnique,
  updateDocDatabase,
  updateOnePropietyDocDatabase,
} from "../firebase/factory.database.js";
import { collectionsName } from "../firebase/collections.js";
import { deleteFile, saveFile } from "../firebase/factory.storage.js";

let nameCollection = collectionsName.users;

export async function getALLUsers(req, res) {
  res.send(await getAllDatabase(nameCollection));
}

export async function getALLUsersMayorEdad(req, res) {
  res.send(await getWhereDatabase(nameCollection, "edad", ">", 18));
}

export async function getOneUsers(req, res) {
  const { id } = req.params;
  res.send(await getOneDatabase(id, nameCollection));
}

export async function sendImage(req, res) {
  try {
    console.log(req.body);
    const { buffer, size, originalname } = req.file;
    const { id, email, username, password } = req.body;
    let datosUsuario = await getOneDatabase(id, nameCollection);
    console.log(datosUsuario);

    let existUsername = datosUsuario.username === username ? true : false;
    let existPassword = datosUsuario.password === password ? true : false;
    let existEmail = datosUsuario.email === email ? true : false;

    if (existUsername && existPassword && existEmail) {
      if (!isImageValdate({ size, originalname }).validation) {
        res
          .status(404)
          .send({ msg: isImageValdate({ size, originalname }).msg });
        return;
      }
      // Subir una imagen a Storage:
      let datos = await saveFile(originalname, nameCollection, buffer);
      // actualizar datos
      await updateOnePropietyDocDatabase(id, nameCollection, {
        linkImage: datos.linkImage,
      });
      res.send({ linkImage: datos.linkImage });
    } else {
      return res.send({ mensaje: "Error no tienes autorización" });
    }
  } catch (error) {
    res.status(404).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function deleteImage(req, res) {
  try {
    const { linkImage } = req.body; //req.params
    //-- eliminar imagen
    res.send(await deleteFile(nameCollection, linkImage));
  } catch (error) {
    res.status(404).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function createUser(req, res) {
  try {
    let validar = validate({ ...req.body });
    if (validar.validation) {
      const { email } = req.body;
      if ((await isEmailUnique(email, nameCollection)) > 0) {
        res.send({ msg: "Email ya registrado, ingresar uno valido" });
        return;
      }
      await createDocDatabase(nameCollection, User, req.body);
      res.send({ ...User({ ...req.body }), msg: "Usuario agregado con éxito" });
    } else {
      res.send(validar.msg);
    }
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function loginUser(req, res) {
  try {
    const { username, password, email } = req.body;
    res.send(await doLogin(nameCollection, username, password, email));
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const {
      usernameNew: username,
      nombreNew: nombre,
      emailNew: email,
      edadNew: edad,
      passwordNew: password,
    } = req.body;
    const validar = validate({ username, nombre, edad, email, password });
    if (validar.validation) {
      res.send(
        await updateDocDatabase(id, nameCollection, User, {
          username,
          nombre,
          email,
          edad,
          password,
        })
      );
    } else {
      res.send(validar.msg);
    }
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  res.send(await deleteDocumentDatabase(id, nameCollection));
}

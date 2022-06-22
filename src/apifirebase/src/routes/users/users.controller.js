import { storage } from "../../firebase/index.js";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import validate, { isImageValdate } from "../../utils/validaciones.js";
import { User } from "../../entities/user.js";
import {
  createDocDatabase,
  deleteDocumentDatabase,
  doLogin,
  getAllDatabase,
  getOneDatabase,
  getWhereDatabase,
  isEmailUnique,
  updateDocDatabase,
} from "../../firebase/factory.database.js";
import { collectionsName } from "../../firebase/collections.js";

let nameCollection = collectionsName.users

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
    const { buffer, size, originalname } = req.file;
    const { id } = req.body;
    if (!isImageValdate({ size, originalname }).validation) {
      res.status(404).send({ msg: isImageValdate({ size, originalname }).msg });
      return;
    }
    const nameImage = "user-" + Date.now() + ".jpg";
    const mountainsRef = ref(storage, "users/" + nameImage);
    const metadata = {
      contentType: "image/jpg",
    };
    // Subir una imagen a Storage:
    uploadBytes(mountainsRef, buffer, metadata);
    // actualizar datos
    await updateDocDatabase(id, nameCollection, User, {
      linkImage: nameImage,
    });
    //--- obtener la imagen
    setTimeout(async () => {
      const imagen = await getDownloadURL(ref(mountainsRef));
      res.send({ nameImage, imagen });
    }, 3000);
  } catch (error) {
    res.status(404).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function deleteImage(req, res) {
  try {
    const { nameImage } = req.body; //req.params
    //-- eliminar imagen
    const mountainsRef3 = ref(storage, nameImage);
    const imagenDelete = await deleteObject(mountainsRef3);
    res.send({ msg: "Imagen eliminada" });
  } catch (error) {
    res.status(404).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function createUser(req, res) {
  try {
    const { email } = req.body;
    if ((await isEmailUnique(email, nameCollection)) > 0) {
      res.send({ msg: "Email ya registrado, ingresar uno valido" });
      return;
    }
    let validar = validate({ ...req.body });

    if (validar.validation) {
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

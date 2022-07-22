import { isImageValidate } from "validaresquema";
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
  res.status(200).send(await getAllDatabase(nameCollection));
}

export async function getALLUsersMayorEdad(req, res) {
  res.status(200).send(await getWhereDatabase(nameCollection, "edad", ">", 18));
}

export async function getOneUsers(req, res) {
  const { id } = req.params;
  res.status(200).send(await getOneDatabase(id, nameCollection));
}

export async function sendImage(req, res) {
  try {
    const { buffer, size, originalname } = req.file;
    const { id } = req.body;
      if (!isImageValidate(originalname, size).validation) {
        res
          .status(404)
          .send({ msg: isImageValidate( size, originalname ).msg });
        return;
      }
      // Subir una imagen a Storage:
      let datos = await saveFile(originalname, nameCollection, buffer);
      // actualizar datos
      await updateOnePropietyDocDatabase(id, nameCollection, {
        linkImage: datos.linkImage,
      });
      res.status(200).send({ linkImage: datos.linkImage });
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
    res.status(204).send(await deleteFile(nameCollection, linkImage));
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
      res.status(400).send({ msg: "Email ya registrado, ingresar uno valido" });
      return;
    }
    await createDocDatabase(nameCollection, req.user);
    res
      .status(200)
      .send({...req.user,
        msg: "Usuario agregado con éxito",
      });
  } catch (error) {
    res.status(400).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function loginUser(req, res) {
  try {
    const { username, password, email } = req.body;
    res
      .status(200)
      .send(await doLogin(nameCollection, username, password, email));
  } catch (error) {
    res.status(400).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    res.status(200).send(
      await updateDocDatabase(id, nameCollection, req.user)
    );
  } catch (error) {
    res.status(400).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    let result =await deleteDocumentDatabase(id, nameCollection)
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send({
      error: error.message,
      msg: "Algo mal ha pasado al eliminar un documento",
    });
  }
}

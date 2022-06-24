import {  deleteObject, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config.js";

export async function saveFile(originalname, nameCollection, buffer) {
  try {
    let extFile = originalname.split(".")[1];
    const nameFile = nameCollection + Date.now() + "." + extFile;
    const mountainsRef = ref(storage, nameCollection + "/" + nameFile);
    const metadata = {
      contentType: `image/${extFile}`,
    };
    // Subir una imagen a Storage:
    uploadBytes(mountainsRef, buffer, metadata);
    return { linkImage: nameFile };
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    };
  }
}


export async function deleteFile(nameCollection, linkImage) {
    try {
      //-- eliminar imagen
      const mountainsRef = ref(storage, nameCollection+'/'+linkImage);
      await deleteObject(mountainsRef);
      return{ msg: `Imagen ${linkImage} eliminada` }
    } catch (error) {
      return{
        error: error.message,
        msg: "Algo mal ha pasado revise los datos enviados",
      }
    }
  }

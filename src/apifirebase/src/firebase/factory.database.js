import {
  collection as Collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import db from "./config.js";

export async function getAllDatabase(nameCollection) {
  try {
    const querySnapshot = await getDocs(Collection(db, nameCollection));
    const datos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { datos, total: datos.length };
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    };
  }
}

export async function getWhereDatabase(
  nameCollection,
  propiedad,
  operador,
  valor
) {
  try {
    const querySnapshot = await getDocs(
      query(Collection(db, nameCollection), where(propiedad, operador, valor))
    );
    const datos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { datos, total: datos.length };
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    };
  }
}

export async function getOneDatabase(id, nameCollection) {
  try {
    const dato = (await getDoc(doc(db, nameCollection, id))).data();
    if (dato === undefined) return { msg: `El id: ${id} no fue encontrado` };
    return { id, ...dato };
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    };
  }
}

export async function deleteDocumentDatabase(id, nameCollection) {
  try {
    const dato = (await getDoc(doc(db, nameCollection, id))).data();
    if (dato === undefined) return { msg: `El id: ${id} no fue encontrado` };
    await deleteDoc(doc(db, nameCollection, id));
    return { message: `Documento: ${id} eliminado` };
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    };
  }
}

export async function createDocDatabase(nameCollection,Entity, ObjEntity) {
    try {
        let dato = await addDoc(Collection(db, nameCollection), Entity(ObjEntity));
        res.send({ ...Entity(ObjEntity), msg: "Usuario agregado con éxito" });
    } catch (error) {
      return {
        error: error.message,
        msg: "Algo mal ha pasado revise los datos enviados",
      }
    }
}
export async function isEmailUnique(email, nameCollection) {
  try {
    const emailUnique = (
      await getDocs(query(Collection(db, nameCollection), where("email", "==", email)))
    ).docs;
     return emailUnique.length

  } catch (error) {
    return 1
  }
}

export async function updateDocDatabase(id,nameCollection, Entity, ObjEntity ) {
  try {
      await updateDoc(
        doc(db, nameCollection, id),
        Entity({...ObjEntity})
      );
      return{ message: `Documento: ${id} editado` }
 
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    }
  }
}

export async function updateOnePropietyDocDatabase(id,nameCollection, PropietyObj ) {
  try {
      await updateDoc(
        doc(db, nameCollection, id),
        PropietyObj
      );
      return{ message: `Documento: ${id} editado` }
 
  } catch (error) {
    return {
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    }
  }
}

export async function doLogin(nameCollection, username, password, email) {
  try {
    const getUsuario = await getDocs(
      query(Collection(db, nameCollection), where("email", "==", email))
    );
    const datosUsuario = getUsuario.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    let existUsername = datosUsuario[0]?.username === username ? true : false;
    let existPassword = datosUsuario[0]?.password === password ? true : false;
    let existEmail = datosUsuario[0]?.email === email ? true : false;

    if (existUsername && existPassword && existEmail) {
      return datosUsuario
    } else {
      return{ msg: "Datos no registrados" }
    }
  } catch (error) {
    return{
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    }
  }
}
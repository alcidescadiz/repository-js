import db, {storage} from "../../firebase/index.js";
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
import { deleteObject,  getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import validate, {isImageValdate} from "../../utils/validaciones.js";
import { User } from "../../entities/user.js";

let nameCollection = "usuarios";
let Usuarios = Collection(db, nameCollection);

export async function getALLUsers(req, res) {
  try {
    const querySnapshot = await getDocs(Usuarios);
    const datos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send({ datos, total: datos.length });
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function getALLUsersMayorEdad(req, res) {
  try {
    const { id } = req.params;
    const querySnapshot = await getDocs(
      query(Usuarios, where("edad", ">", 18))
    );
    const datos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send({ datos, total: datos.length });
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

export async function getOneUsers(req, res) {
  try {
    const { id } = req.params;
    const dato = (await getDoc(doc(db, nameCollection, id))).data();
    res.send({ id, ...dato });
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}


export async function sendImage(req, res) {
  try {
    const { buffer, size, originalname } = req.file
    const { id } = req.body
    if (!isImageValdate({size,originalname }).validation) {
      res.status(404).send({msg: isImageValdate({size,originalname }).msg})
      return
    }
    const nameImage = 'user-' + Date.now()+'.jpg'
    const mountainsRef =  ref(storage, 'users/'+ nameImage)
    const metadata = {
      contentType: 'image/jpg',
    };
    // Subir una imagen a Storage: 
    uploadBytes(mountainsRef, buffer, metadata)
    // actualizar datos
    await updateDoc(
      doc(db, nameCollection, id),
      { linkImage: nameImage }
    );
    //--- obtener la imagen
    setTimeout(async ()=>{
      const imagen = await getDownloadURL(ref(mountainsRef))
      res.send({nameImage, imagen});
    }, 3000)
  } catch (error) {
    res.status(404).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados"
    });
  }
}

export async function deleteImage(req, res) {
  try {
    const { nameImage} = req.body; //req.params
    //-- eliminar imagen
    const mountainsRef3 =  ref(storage, nameImage);
    const imagenDelete = await deleteObject(mountainsRef3)
    res.send({msg: 'Imagen eliminada'});
  } catch (error) {
    res.status(404).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados"
    });
  }
}


export async function createUser(req, res) {
  try {
    const { email } = req.body;
    const emailUnique = (
      await getDocs(query(Usuarios, where("email", "==", email)))
    ).docs;
    if (emailUnique.length > 0) {
      res.send({ msg: "Email ya registrado, ingresar uno valido" });
      return;
    }
    let validar = validate({ ...req.body });

    if (validar.validation) {
      await addDoc(Usuarios, User({ ...req.body }));
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
    const getUsuario = await getDocs(
      query(Usuarios, where("email", "==", email))
    );
    const datosUsuario = getUsuario.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    let existUsername = datosUsuario[0].username === username ? true : false;
    let existPassword = datosUsuario[0].password === password ? true : false;
    let existEmail = datosUsuario[0].email === email ? true : false;
    
    if (existUsername && existPassword && existEmail) {
      res.send(datosUsuario);
    } else {
      res.send({ msg: "Datos no registrados" });
    }
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
    const validar = validate({username, nombre, edad, email, password});
    if (validar.validation) {
      await updateDoc(
        doc(db, nameCollection, id),
        User({ username, nombre, edad, email, password })
      );
      res.send({ message: `Documento: ${id} editado` });
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
  try {
    const { id } = req.params;
    await deleteDoc(doc(db, nameCollection, id));
    res.send({ message: `Documento: ${id} eliminado` });
  } catch (error) {
    res.send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}

import express from 'express'
const routerUser = express.Router()

// firebase
import db from '../../firebase/index.js'
import {collection as Collection, 
        getDocs, query, where, addDoc, doc, 
        deleteDoc, updateDoc, getDoc  } from "firebase/firestore";
import validate from './validaciones.js';
let nameCollection = "usuarios"
let Usuarios = Collection(db, nameCollection)

import validarUsuario from '../../auth/index.js'
// Rutas
routerUser.get('/api',validarUsuario, async (req, res)=>{
    const querySnapshot = await getDocs(Usuarios);
    const datos = querySnapshot.docs.map((doc) => 
        ({ id: doc.id, ...doc.data()})
    )
    res.send({datos, total: datos.length})
})
routerUser.get('/api/mayoredad', validarUsuario, async (req, res)=>{
    const {id} = req.params
    const querySnapshot = await getDocs(query(Usuarios, where("edad", ">", 18)))
    const datos = querySnapshot.docs.map((doc) => 
        ({ id: doc.id, ...doc.data()})
    )
    res.send({datos, total: datos.length})
})

routerUser.get('/api/:id',validarUsuario, async (req, res)=>{
    const {id} = req.params
    const dato = (await getDoc(doc(db, nameCollection, id))).data()
    res.send({id, ...dato})
})


routerUser.post('/api', async (req, res)=>{
    const {username, nombre, edad, email, password} = req.body
    const emailUnique =  (await getDocs(query(Usuarios, where("email", "==", email)))).docs
    if (emailUnique.length > 0) {
        res.send({msg: "Email ya registrado, ingresar uno valido"})
        return 
    }
    let validar = validate(username, nombre, edad, email, password)
    const USUARIO = {
        username: username.trim(),
        nombre: nombre.trim().toUpperCase(), 
        edad: edad, 
        email: email.trim().toLowerCase(),
        password: password.trim()
    }
    if(validar.validation){
        const querySnapshot = await  addDoc(Usuarios, USUARIO );
        res.send({...USUARIO,msg: "Usuario agregado con éxito"})
    }else{
        res.send(validar.msg)
    }
})

routerUser.post('/api/login', async (req, res)=>{
    const {username, password, email} = req.body
    const getUsuario =  (await getDocs(query(Usuarios, where("email", "==", email))))
    const datosUsuario = getUsuario.docs.map((doc) => 
        ({ id: doc.id, ...doc.data()})
    )
    let existUsername = datosUsuario[0].username === username ? true: false
    let existPassword = datosUsuario[0].password === password ? true: false
    let existEmail = datosUsuario[0].email === email ? true: false

    if (existUsername && existPassword && existEmail) {
        res.send(datosUsuario)
    } else {
        res.send({msg: 'Datos no registrados'})
    }

})

routerUser.put('/api/:id',validarUsuario, async (req, res)=>{
    const {id} = req.params
    const {usernameNew, nombreNew, emailNew, edadNew, passwordNew} = req.body
    const validar = validate(usernameNew, nombreNew, edadNew, emailNew, passwordNew)
    if(validar.validation){
        await updateDoc(doc(db, nameCollection, id),
            {
                username: usernameNew.trim(),
                nombre : nombreNew.trim().toUpperCase(),
                email: emailNew.trim().toLowerCase(),
                edad: edadNew,
                password: passwordNew.trim()
            });
        res.send({message:`Documento: ${id} editado`})
    }else{
        res.send(validar.msg)
    }
})

routerUser.delete('/api/:id',validarUsuario, async (req, res)=>{
    const {id} = req.params
    await deleteDoc(doc(db, nameCollection, id));
    res.send({message:`Documento: ${id} eliminado`})
})

export default routerUser
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
// Rutas
routerUser.get('/api', async (req, res)=>{
    const querySnapshot = await getDocs(Usuarios);
    const datos = querySnapshot.docs.map((doc) => 
        ({ id: doc.id, ...doc.data()})
    )
    res.send({datos, total: datos.length})
})
routerUser.get('/api/mayoredad', async (req, res)=>{
    const {id} = req.params
    const querySnapshot = await getDocs(query(Usuarios, where("edad", ">", 18)))
    const datos = querySnapshot.docs.map((doc) => 
        ({ id: doc.id, ...doc.data()})
    )
    res.send({datos, total: datos.length})
})

routerUser.get('/api/:id', async (req, res)=>{
    const {id} = req.params
    const dato = (await getDoc(doc(db, nameCollection, id))).data()
    res.send({id, ...dato})
})


routerUser.post('/api', async (req, res)=>{
    const {nombre, edad, email} = req.body
    const emailUnique =  (await getDocs(query(Usuarios, where("email", "==", email)))).docs
    if (emailUnique.length > 0) {
        res.send({msg: "Email ya registrado, ingresar uno valido"})
        return 
    }

    if(validate(nombre, edad, email).validation){
        const querySnapshot = await  addDoc(Usuarios, {
            nombre: nombre, 
            edad: edad, 
            email: email
        });
        res.send({nombre, edad, email,
            msg: "Usuario agregado con éxito"
        })
    }else{
        res.send(validate(nombre, edad, email).msg)
    }
})


routerUser.put('/api/:id', async (req, res)=>{
    const {id} = req.params
    const {nombre, email, edad} = req.body
    if(validate(nombre, edad, email).validation){
        await updateDoc(doc(db, nameCollection, id),
            {
                nombre : nombre,
                email: email,
                edad: edad
            });
        res.send({message:`Documento: ${id} editado`})
    }else{
        res.send(validate(nombre, edad, email).msg)
    }
})

routerUser.delete('/api/:id', async (req, res)=>{
    const {id} = req.params
    await deleteDoc(doc(db, nameCollection, id));
    res.send({message:`Documento: ${id} eliminado`})
})

export default routerUser
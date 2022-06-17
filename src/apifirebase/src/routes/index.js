import express from 'express'
const routerUser = express.Router()

// firebase
import db from '../firebase/index.js'
import {  writeBatch, collection as Collection, 
        getDocs, query, where, addDoc, doc, 
        deleteDoc, updateDoc  } from "firebase/firestore";
        const batch = writeBatch(db);
let nameCollection = "usuarios"
let Usuarios = Collection(db, nameCollection)
// Rutas
routerUser.get('/api', async (req, res)=>{
    const querySnapshot = await getDocs(Usuarios);
    const datos = []
    querySnapshot.forEach((doc) => {
        datos.push({
            id: doc.id, ...doc.data()
    })
    });
    res.send(datos)
})
routerUser.get('/api/:id', async (req, res)=>{
    const {id} = req.params
    const querySnapshot = await getDocs(Usuarios)
    const datoId = []
    querySnapshot.forEach((doc) => {
        datoId.push({
            id: doc.id, ...doc.data()
        })
    })
    const getOne = datoId.filter(e=> e.id === id)

    res.send(getOne)
})

routerUser.post('/api', async (req, res)=>{
    const {nombre, edad, email} = req.body
    const querySnapshot = await  addDoc(Usuarios, {
        nombre: nombre, 
        edad: edad, 
        email: email
    });

    res.send({nombre, edad, email})
})


routerUser.put('/api/:id', async (req, res)=>{
    const {id} = req.params
    const {nombre, email, edad} = req.body
    await updateDoc(doc(db, nameCollection, id),
        {
            nombre : nombre,
            email: email,
            edad: edad
        });
    res.send({message:`Documento: ${id} editado`})
})

routerUser.delete('/api/:id', async (req, res)=>{
    const {id} = req.params
    await deleteDoc(doc(db, nameCollection, id));
    res.send({message:`Documento: ${id} eliminado`})
})

export default routerUser
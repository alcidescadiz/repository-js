import express from 'express'
const routerUser = express.Router()
// Controladores
import {deleteUser, getALLUsers, getALLUsersMayorEdad, 
        getOneUsers, createUser, loginUser, updateUser} from'./controller.js'
// middleware de autenticación 
import validarUsuario from '../../auth/index.js'
// Rutas
routerUser.get('/api',validarUsuario, getALLUsers )

routerUser.get('/api/mayoredad', validarUsuario, getALLUsersMayorEdad)

routerUser.get('/api/:id',validarUsuario, getOneUsers)

routerUser.post('/api', createUser)

routerUser.post('/api/login', loginUser)

routerUser.put('/api/:id',validarUsuario, updateUser)

routerUser.delete('/api/:id',validarUsuario, deleteUser)

export default routerUser
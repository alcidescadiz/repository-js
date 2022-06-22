import express from "express";
const routerUser = express.Router();
// Controladores
import {
  deleteUser,
  getALLUsers,
  getALLUsersMayorEdad,
  getOneUsers,
  createUser,
  loginUser,
  updateUser,
  sendImage
} from "./users.controller.js";
// middleware de autenticación
import validarUsuario from "../../auth/index.js";
import { upload } from "../../utils/multer.js";


// Rutas
routerUser.get("/api", validarUsuario, getALLUsers);

routerUser.get("/api/mayoredad", validarUsuario, getALLUsersMayorEdad);

routerUser.get("/api/:id", validarUsuario, getOneUsers);

routerUser.post("/api", createUser);

routerUser.post("/api/login", loginUser);

routerUser.post("/api/image",upload.single('file'), sendImage);

routerUser.put("/api/:id", validarUsuario, updateUser);

routerUser.delete("/api/:id", validarUsuario, deleteUser);

export default routerUser;

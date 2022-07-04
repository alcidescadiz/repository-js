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
  sendImage,
  deleteImage
} from "../controllers/users.controller.js";
// middleware de autenticación
import validarUsuario from "../middlewares/auth.js";
import validateRequestUser from "../middlewares/users/validateRequestUser.js";
import { upload } from "../services/multer.js";

// Rutas
routerUser.get("/api", validarUsuario, getALLUsers);

routerUser.get("/api/mayoredad", validarUsuario, getALLUsersMayorEdad);

routerUser.get("/api/:id", validarUsuario, getOneUsers);

routerUser.post("/api",validateRequestUser, createUser);

routerUser.post("/api/login", loginUser);

routerUser.post("/api/image", upload.single('file'), sendImage);

routerUser.put("/api/:id", validarUsuario,validateRequestUser, updateUser);

routerUser.delete("/api/image", validarUsuario, deleteImage);

routerUser.delete("/api/:id", validarUsuario, deleteUser);

//routerUser.use("/user", routerUser)

export default routerUser;

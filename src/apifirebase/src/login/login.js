import express from "express";
import { loginUser } from "../controllers/login.controller.js";
const routerLogin = express.Router();

routerLogin.post("/", loginUser);

export default routerLogin;
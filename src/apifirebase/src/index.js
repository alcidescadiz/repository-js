// npm i express cors dotenv ejs
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Router
import routerUser from "./routes/users.routes.js";
import routerLogin from "./login/login.js";

app.use("/v1/user", routerUser);
app.use("/v1/login", routerLogin);
// para descargar un archivo

app.get("/", (req, res) => {
  res.send(`Ejemplo de ${process.env.Name}`);
});

export default app


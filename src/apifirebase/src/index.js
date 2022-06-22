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
import routerUser from "./routes/users/ussers.routes.js";

app.use("/user", routerUser);
// para descargar un archivo

app.get("/", (req, res) => {
  res.send(`Ejemplo de ${process.env.Name}`);
});
// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Escuchando el puerto  ${PORT}`);
});

import app from "./index.js";
// Puerto

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Escuchando el puerto  ${PORT}`);
});
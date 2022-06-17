// npm i express cors dotenv
import path from 'path'
import {fileURLToPath} from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import express from 'express'
import cors from  'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))

// Rutas
import {Navegar} from './puppeteer/puppetter.js'
app.post('/navegar',async (req, res)=>{
  try {
    console.log(req.body)
    let respuesta = await Navegar(req.body)
    res.json({msg : respuesta || 'Éxito al abrir la pagina'})
  } catch (error) {
    res.json(error.message)
  }
})
app.get('/pup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
// Puerto
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{ console.log( `Escuchando el puerto  ${PORT}`)})

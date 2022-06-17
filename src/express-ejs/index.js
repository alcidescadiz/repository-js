// npm i express cors dotenv ejs
import path from 'path'
import {fileURLToPath} from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import express from 'express'
import cors from  'cors'
import dotenv from 'dotenv'
import { Console } from 'console'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Rutas
// para descargar un archivo
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
// render de plantillas ejs
app.get('/', (req, res)=>{
    res.render('index', {title: 'Home page'})
})
// Puerto
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{ console.log( `Escuchando el puerto  ${PORT}`)})

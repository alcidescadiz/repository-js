import path from 'path'

/**
 * __dirname en Es module
 */
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

/**
 * Express
 */
import express from 'express'
const app = express()

import http from 'http'
const server = http.createServer(app)
/**
 * Rutas
 */
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});
/**
 * Socket
 */
import {Server} from 'socket.io'
const io = new Server(server)

let conectados= 0
io.on('connection', (socket) => {
    conectados++
    console.log('New user connected');
    socket.on('disconnect', (e) => {
        conectados--
        io.emit('alert',  {message:'Se han desconectado', total: conectados})
    })
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
    socket.broadcast.emit('Bienvenido', {message:'Bienvenido al chat', total: conectados})
    socket.emit('Bienvenido', {message:'Bienvenido al chat', total: conectados})
});

/**
  * Server
  * @type {number}
  */
const port = 3000

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//------------------------------------------

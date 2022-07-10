/**
 * Modulo de Api
 * @module api
 * @example https://www.npmjs.com/package/jsdoc-http-plugin 
 */

import express from "express"
let app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 /**
  * A float number
  * @type {number}
  */
const port = 3000


function middleware (req, res, next){
  req.string = 'prueba string'
  req.objeto = {msg : 'prueba objeto'}
  next()
}


/**
 * Api Get
 * @name inicio Incio de pagina
 * @path {GET} /
 * @code {200} if the request is successful
 * @response {String} "Hello.World!" Respuesta de la ruta
 * @example http://127.0.0.1:3000/
 */
app.get('/',middleware,  (req, res) => {
  //console.log({uno : req.string, dos: req.objeto})
  res.send({uno : req.string, dos: req.objeto})
})



console.log(process.argv)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

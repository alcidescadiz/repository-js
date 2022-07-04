/**
 * Modulo de Api
 * @module api
 * @example https://www.npmjs.com/package/jsdoc-http-plugin 
 */

import express from "express"
let app = express()


 /**
  * A float number
  * @type {number}
  */
const port = 3000

/**
 * Api Get
 * @name inicio Incio de pagina
 * @path {GET} /
 * @code {200} if the request is successful
 * @response {String} "Hello.World!" Respuesta de la ruta
 * @example http://127.0.0.1:3000/
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * Upload a file.
 * @name File Upload
 * @path {POST} /v1
 */
app.post("./v1", (req, res, next) => {})

console.log(process.argv)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

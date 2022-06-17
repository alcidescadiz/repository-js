import Fastify from 'fastify'
const fastify = Fastify({
  logger: false
})

import {route} from './routes/index.js'

let inicio = (fastify, opts, done)=> {
  done()
}
fastify.register(inicio, route, { prefix: '/v1' })

const PORT =  3000

fastify.listen(PORT, (err, address) => {
  if (err) throw err
  console.log(`||--> Server is now listening on ${PORT}`)
})
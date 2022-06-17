export let route = async (fastify, opts) =>{
    fastify.get('/', async (request, reply) => {
        try {
            reply.type('application/json').code(200)
            return { hello: 'world' }
        } catch (error) {
            reply.type('application/json').code(400)
            return { Error: error.message }
        }
      })
    
    fastify.get('/:id', async (request, reply) => {
        try {
            reply.type('application/json').code(200)
            return { hello: `world from get One ${request.params.id}` }
        } catch (error) {
            reply.type('application/json').code(400)
            return { Error: error.message }
        }
    })
    
    fastify.post('/', async (request, reply) => {
        try {
            console.log(request.body)
            reply.type('application/json').code(201)
            return { hello: 'world from post' }
        } catch (error) {
            reply.type('application/json').code(400)
            return { Error: error.message }
        }
    })
    
    fastify.put('/:id', async (request, reply) => {
        try {
            console.log(request.body)
            reply.type('application/json').code(200)
            return { hello: `world from put ${request.params.id}` }
        } catch (error) {
            reply.type('application/json').code(404)
            return { Error: error.message }
        }
    })
    
    fastify.delete('/:id', async (request, reply) => {
        try {
            reply.type('application/json').code(200)
            return { hello: `world from delete ${request.params.id}` }
        } catch (error) {
            reply.type('application/json').code(400)
            return { Error: error.message }
        }
    })
}

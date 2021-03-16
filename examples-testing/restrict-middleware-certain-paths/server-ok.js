const fastify = require('fastify')()
const path = require('path')
const serveStatic = require('serve-static')

fastify
  .register(require('fastify-express'))
  .after(() => {
    fastify.use('/css', serveStatic(path.join(__dirname, '/assets')))
  })

fastify.listen(3000, console.log);

const fastify = require("fastify")

const app = fastify()

app.get("/", (req, res) => {
  res.send(req.query)
})

app.listen(8001)
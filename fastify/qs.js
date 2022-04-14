const fastify = require("fastify")
const qs = require("qs")

const app = fastify({querystringParser: qs.parse})

app.get("/", (req, res) => {
  res.send(req.query)
})

app.listen(8002)
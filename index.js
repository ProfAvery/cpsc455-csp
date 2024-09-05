const express = require("express")
const morgan = require("morgan")
const app = express()
app.use(morgan("dev"))
const port = 3000

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
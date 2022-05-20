const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const home = require('./src/routes/home')
const path = require('path')

// Configurando a pasta public.
app.use(express.static('public'))



// Config da template engine.
app.set('view engine', 'html')
nunjucks.configure(__dirname + "/src/views", {
  autoescape: true,
  express: app,
  cache: false,
  watch: true
})

// app.get("/", (request , response) => {
//   return response.render("home")
// })


app.use('/', home)



// Adicionando uma porta para o projeto.
app.listen(3333, () => {
  console.log("Server started in port 3333")
})


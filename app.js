const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const home = require('./src/routes/home')
const about = require('./src/routes/about')
const contato = require('./src/routes/contato')
const auth = require('./src/routes/auth')
const path = require('path')

// Configurando a pasta public.
app.use(express.static('public'))



// Config da template engine.
app.set('view engine', 'njk')
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
app.use('/about', about)
app.use('/contato', contato)
app.use('/auth', auth)


// Adicionando uma porta para o projeto.
app.listen(3333, () => {
  console.log("Server started in port 3333")
})


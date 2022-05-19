const express = require("express")
const app = express()
const nunjucks = require("nunjucks")

// Configurando a pasta public.
app.use(express.static("public"))


// Config da template engine.
app.set('view engine', 'html')
nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
  cache: false,
  watch: true
})

app.get("/", (request , response) => {
    return response.render("home")
})

app.get("/about", (request , response) => {
  return response.render("about")
})

// Adicionando uma porta para o projeto.
app.listen(3333)


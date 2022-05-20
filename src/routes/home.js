const express = require('express')
const router = express.Router();

router.get("/", (req , res) => {
   return res.render("home", {title: 'Olá, bem vindo ao inicio!', content: 'Bom... Ainda não sei do que exatamente, mas no minimo surgirá daqui muito aprendizado e conhecimento sobre Nunjucks =) '})
})

module.exports = router
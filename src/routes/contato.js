const express = require('express')
const router = express.Router();

router.get("/", (req , res) => {
   return res.render("contato", {title: 'Página Contato', content: 'Entre em contato!'})
})

module.exports = router
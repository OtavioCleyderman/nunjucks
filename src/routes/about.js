const express = require('express')
const router = express.Router();

router.get("/", (req , res) => {
   return res.render("about", {title: 'Página Sobre', content: 'É sobre isso! =)'})
})

module.exports = router
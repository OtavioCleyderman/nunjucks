const express = require('express')
const router = express.Router();

router.get("/", (req , res) => {
   return res.render("home", {features: [
      {
         title: "Athletics",
         source: "/images/athletics.jpg"
      },
      {
         title: "Baseball",
         source: "/images/baseball.jpg"
      },
      {
         title: "Basketball",
         source: "/images/basketball.jpg"
      },
      {
         title: "Cycling",
         source: "/images/cycling.jpg"
      },
      {
         title: "Football",
         source: "/images/football.jpg"
      },
      {
         title: "Golf",
         source: "/images/golf.jpg"
      },
      {
         title: "Skate",
         source: "/images/skate.jpg"
      },
      {
         title: "Swimming",
         source: "/images/swimming.jpg"
      },
      {
         title: "Tennis",
         source: "/images/tennis.jpg"
      }
   ]})
})

module.exports = router
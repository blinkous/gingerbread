var express = require("express");
var router = express.Router();
const key = process.env.API_KEY;
const axios = require("axios");
const numExpectedResults = 9;

/* GET Recipes matching query from API */
router.get("/:query", function (req, res) {
  const { query } = req.params;
  if (query !== "") {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&number=${numExpectedResults}`
      )
      .then(({ data: { results } }) => {
        console.log("<3 Gingerbread has gotten some results: ", results);
        return res.status(200).send(results);
      })
      .catch((e) => res.status(500).json({ error: e }));
  }
});

module.exports = router;

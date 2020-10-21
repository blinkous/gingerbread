var express = require("express");
var router = express.Router();
const key = process.env.API_KEY;
const axios = require("axios");

/* GET Recipes matching query from API */
router.get("/:id", function (req, res) {
  const { id } = req.params;
  if (id !== "") {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`
      )
      .then(({ data }) => {
        console.log(
          "<3 Gingerbread has gotten some recipe information: ",
          data
        );
        return res.status(200).send(data);
      })
      .catch((e) => res.status(500).json({ error: e }));
  }
});

module.exports = router;

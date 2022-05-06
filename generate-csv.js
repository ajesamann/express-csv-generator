const express = require("express");
const router = express.Router();
const ObjectsToCsv = require("objects-to-csv");

router.post("/generate-csv", async (req, res, next) => {
  // generate the csv and send a 200
  const csv = new ObjectsToCsv(req.body);
  await csv.toDisk("./generated.csv");

  res.sendStatus(200);
});

module.exports = router;

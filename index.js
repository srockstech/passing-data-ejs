import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var numLetters = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs", {numLetters: numLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

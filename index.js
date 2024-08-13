// console.log("my lazz pharma backend");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/fb", (req, res) => {
  res.send("fb of sakib");
});

app.listen(port, () => {
  console.log(`express listening to ${port}`);
});

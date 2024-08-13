// console.log("my lazz pharma backend");
require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/fb", (req, res) => {
  res.send("fb of sakib");
});

app.listen(process.env.PORT, () => {
  console.log(`express listening to ${process.env.PORT}`);
});

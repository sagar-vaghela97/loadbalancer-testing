const express = require("express");
const dotenv = require("dotenv");
var os = require("os");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send(`<h3>It's ${os.hostname()}</h3>`);
});

app.listen(process.env.APP_PORT, () => {
  console.log("Server started on port " + process.env.APP_PORT);
});

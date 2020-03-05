const path = require("path");
const fs = require("fs");
const express = require("express");

const port = 3000;

const app = express();
app.use("/static", express.static(path.resolve(__dirname, "./dist")));

app.get("*", (req, res) => {
  const html = fs
    .readFileSync(path.resolve(__dirname, "./index.html"))
    .toString();
  res.send(html);
});

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});

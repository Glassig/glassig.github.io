const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");
const sass = require("sass");

const host = "localhost";
const port = 8000;

const app = express();
app.use(express.static("."));

sass.render(
  {
    file: "stylesheets/style.scss",
  },
  function (error, result) {
    if (error) {
      return;
    }
    fs.writeFile("stylesheets/style.css", result.css, () => {});
  }
);

app.use("/", function (_req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
const server = http.createServer(app);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

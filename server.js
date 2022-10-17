const http = require("http");
const express = require("express");
const path = require("path");

const host = "localhost";
const port = 8000;

const app = express();
app.use(express.static("."));

app.use("/", function (_req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
const server = http.createServer(app);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

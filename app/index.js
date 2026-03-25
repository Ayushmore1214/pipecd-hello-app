const express = require("express");
const app = express();

const PORT = 3000;
const VERSION = process.env.VERSION || "v1";

app.get("/", (req, res) => {
  res.send(`
    <h1> PipeCD Demo</h1>
    <h2>Version: ${VERSION}</h2>
  `);
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
const http = require("http");

const PORT = 3000;
const VERSION = process.env.VERSION || "v2";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello from PipeCD 🚀\nVersion: ${VERSION}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const http = require("node:http");
const fs = require("node:fs");
const indexHtml = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(indexHtml);
});



server.listen(3000, () => {
console.log("Listening");
});

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { Poppler } = require("node-poppler");

const file = "file.pdf";
const poppler = new Poppler("/opt/homebrew/bin");
console.log("poppler: ",poppler)
const options = {
	firstPageToConvert: 1,
	lastPageToConvert: 2,
};

poppler.pdfToHtml(file, undefined, options).then((res) => {
	console.log(res);
    res.end("res");
});

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //   const { Poppler } = require("node-poppler");

    //   const file = "file.pdf";
    //   const poppler = new Poppler("/opt/homebrew/bin");
    //   console.log("poppler: ",poppler)
    //   const options = {
    //   	firstPageToConvert: 1,
    // 	lastPageToConvert: 2,
    //   };

    //   poppler.pdfToHtml(file, undefined, options).then((res) => {
    // 	console.log(res);
    //     res.end("res");
    //   });

    const fs = require('fs');
    const pdf = require('pdf-parse');
    const fileName = 'niva';
    let dataBuffer = fs.readFileSync(fileName+'.pdf');

    pdf(dataBuffer).then(function (data) {

        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata);
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text);

        const fs = require('fs');
        fs.writeFileSync(fileName+'.txt', data.text);

        // const summarize = require('text-summarization')

        // var text = data.text 
        // const summary = summarize({ text }).then(resp => {
        //     console.log("resp: ", resp)
        // }).error(err => {
        //     console.log(err)
        // })
        // console.log(JSON.stringify(summary, null, 2))


    });


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


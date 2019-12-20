const http = require('http');
const fs = require('fs');
//const minimist = require('minimist')(process.argv.slice(2));
const {e, fileName} = require('minimist')(process.argv.slice(2));


function getFile(fileName,ext,res){
  fs.readFile(`./${fileName}.${ext}`,'utf-8', (err,data) => {
    let wdata = data;
    let statusCode = 200;
    if (err){
      wdata = 'File not found';
      statusCode = 404;
    }
    writeHeadFuc(res,statusCode,wdata);
  })
}

function writeHeadFuc(res,statusCode,wdata){
  res.writeHead(statusCode, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(wdata);
  res.end();
}


http.createServer((req,res) => {
  if(e && fileName){
       getFile(fileName,e,res)
  }else{
    writeHeadFuc(res,200,'hello world');
  }
}).listen(3000);

// //http protocol@ inchx kashxati

//node index.js -e txt --fileName=hello
//node index.js -e html --fileName=main



// const http = require('http');
// const server = http.createServer().listen(8080);
// server.on('request', (req,res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html; charset=utf-8'
//   });
//   res.write('Hello');
//   res.end();
// });
//
// server.on('listening', () => {
//   console.log('Listening on port 8080');
// });

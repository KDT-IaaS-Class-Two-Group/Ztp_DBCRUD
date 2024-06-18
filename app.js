const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
  if (request.method === "GET") {
    if(request.url === "/") {
      const index = fs.readFileSync("./public/html/index.html")
      response.setHeader('Content-Type',"text/html",'charset=utf8')
      response.writeHead(200);
      response.write(index);
      response.end();
    }
  }
})

server.listen(3000);
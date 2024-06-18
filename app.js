const http = require('http');
const fs = require('fs');
const db = require("sqlite3").verbose();
const database = new db.Database("/index.db");
database.run (
  "CREATE TABLE student(id integer primary key, name text not null)"
);
database.close();
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
  if(request.method === "POST") {
    console.log("dd");
    if(request.url === "/login") {
      let body = "";
      request.on ("data",(data)=> {
        body += data;
        console.log(body);
      });
      request.on("end",()=>{
        response.setHeader('Content-Type',"text/html",'charset=utf8')
        response.writeHead(200);
        const data = body;
        console.log(data)
        console.log(body)
  
        const html=`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database CRUD Test</title>
  </head>
  <body>
    <div>${data}</div>
  </body>
  </html>
  `
        response.write(html);
        response.end();

      });
      // const index = fs.readFileSync("./public/html/index.html")
    }
  }
})

server.listen(3000);
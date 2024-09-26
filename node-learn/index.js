const http = require("node:http");

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "content-type: text/plain"
  })
  response.write("String! ", "utf-8", () => {
    console.log("Response Added to body!");
  }
  response.end("Thanks for visiting");
  console.log(response.writableEnded);
  console.log(resppnse.writableFinished);
})

server.listen(7500, () => {
  console.log("Server is running at Port: 7500  (LocalHost)");
}

const http = require("node:http");

const server = http.createServer((request, response) => {
})

server.listen(7500, () => {
  console.log("Server is running at Port: 7500  (LocalHost)");
}

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["POST", "GET"],
  },
});
// const date = new Date();
// const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// console.log(`O cliente ${data.id} disse: ${data.message} as ${time} `);

// require(`${__dirname}/sockets/feed`)(io);
require(`./sockets/chat`)(io);

http.listen(3000, () => {
  console.log("Pai tá on!!!");
});

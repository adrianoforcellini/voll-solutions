const express = require("express");
const app = express();
const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

require(`./sockets/chat`)(io);

http.listen(3001, () => {
  console.log("Pai tá on!!!");
});

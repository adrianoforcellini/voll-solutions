const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const messagesController = require("./controllers/messagesController");

app.use(cors());

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

require(`./sockets/chat`)(io);

app.get("/getMessages", messagesController.getLast30Messages);

http.listen(3001, () => {
  console.log("Pai tá on!!!");
});

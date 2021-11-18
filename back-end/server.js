const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const messagesController = require("./controllers/messagesController");

app.use(cors());

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

require(`./sockets/chat`)(io);

const PORT = 3001
http.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});

const messagesController = require("../controllers/messagesController");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Novo usuário conectado ${socket.id}`);
    socket.on("clientMessage", (data) => {
      messagesController.saveMessage(data);
    });
  });
};

const messagesController = require("../controllers/messagesController");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Novo usuário conectado ${socket.id}`);
    socket.on('sendMeMessages', async () => {
      const last30Messages = await messagesController.getLast30Messages()
      socket.emit("last30Messages", last30Messages  );
    })
    socket.on("clientMessage", (data) => {
      messagesController.saveMessage(data);
      socket.emit("getMessages");
      socket.broadcast.emit("getMessages");
    });
  });
};

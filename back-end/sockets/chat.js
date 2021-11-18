const messagesController = require("../controllers/messagesController");
const atualizeClientsOn = require("../utills/atualizeClientsOn")
let socketId = ""
let clientsOn = [];

module.exports = (io) => {
  io.on("connection", (socket) => {
    socketId = socket.id;

    socket.on('clientName', (client) => {
      const { nickName } = client;
      clientsOn = atualizeClientsOn.addClientsOn(nickName, socketId);
      socket.emit('clientsOn', clientsOn);
      socket.broadcast.emit('clientsOn', clientsOn)
    })

    socket.on('sendMeMessages', async () => {
      const last30Messages = await messagesController.getLast30Messages()
      socket.emit("last30Messages", last30Messages);
    })

    socket.on("clientMessage", (data) => {
      messagesController.saveMessage(data);
      socket.emit("getMessages");
      socket.broadcast.emit("getMessages");
    });

    socket.on('disconnect', () => {
      clientsOn = atualizeClientsOn.delClient(socket.id);
      socket.emit('clientsOn', clientsOn);
      socket.broadcast.emit('clientsOn', clientsOn)
    });
  });

};

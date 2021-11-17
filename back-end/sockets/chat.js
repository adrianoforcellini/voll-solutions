module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Novo usuário conectado ${socket.id}`);
    socket.on("clientMessage", (message) => {
      console.log(message);
    });
  });
};

// const date = new Date();
// const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// console.log(`O cliente ${data.id} disse: ${data.message} as ${time} `);

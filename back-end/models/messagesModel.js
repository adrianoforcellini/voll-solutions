const connection = require("./connection");

const saveMessage = async (client, message, time) => {
  await connection.execute(
    `INSERT INTO Voll_soChatIo.messages (client, message, time) VALUES ('${client}','${message}', '${time}')`
  );
};

module.exports = { saveMessage };

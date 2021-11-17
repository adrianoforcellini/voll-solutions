const connection = require("./connection");

const saveMessage = async (client, message) => {
  await connection.execute(
    `INSERT INTO Voll_soChatIo.messages (client, message) VALUES ('${client}','${message}')`
  );
};

module.exports = { saveMessage };

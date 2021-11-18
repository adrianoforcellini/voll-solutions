const connection = require("./connection");

const saveMessage = async (client, message, time) => {
  await connection.execute(
    `INSERT INTO Voll_soChatIo.messages (client, message, time) VALUES ('${client}','${message}', '${time}')`
  );
};

const getLast30Messages = async () => {
  const listOfMessagesAndColumnsDetails = await connection.execute(
    "SELECT * FROM messages ORDER By id DESC LIMIT 30;"
  );
  const last30Messages = listOfMessagesAndColumnsDetails[0];
  return last30Messages;
};

module.exports = { saveMessage, getLast30Messages };

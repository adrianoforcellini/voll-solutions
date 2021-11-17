const connection = require("./connection");

const saveMessage = async (client, message, time) => {
  await connection.execute(
    `INSERT INTO Voll_soChatIo.messages (client, message, time) VALUES ('${client}','${message}', '${time}')`
  );
};

const getLast30Messages = async () => {
  const last30 = await connection.execute(
    "SELECT * FROM messages ORDER By id DESC LIMIT 30;"
  );
  console.log(last30, "lastt");
};

module.exports = { saveMessage };

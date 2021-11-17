const messagesModel = require("../models/messagesModel");

const saveMessage = (data) => {
  const { client, message } = data;
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  messagesModel.saveMessage(client, message, time);
};

module.exports = { saveMessage };

const messagesModel = require("../models/messagesModel");

const saveMessage = (data) => {
  const { client, message } = data;
  messagesModel.saveMessage(client, message);
};

module.exports = { saveMessage };

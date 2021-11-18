const messagesModel = require("../models/messagesModel");
const getTime = require("../utills/formateDate");

const saveMessage = (data) => {
  const { client, message } = data;
  time = getTime();
  messagesModel.saveMessage(client, message, time);
};

const getLast30Messages = async (_req, res) => {
  const last30Messages = await messagesModel.getLast30Messages();
  res.send(last30Messages);
};
module.exports = { saveMessage, getLast30Messages };

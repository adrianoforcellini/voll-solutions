const messagesModel = require("../models/messagesModel");
const getTime = require("../utills/formateDate");

const saveMessage = (data) => {
  const { client, message } = data;
  time = getTime();
  messagesModel.saveMessage(client, message, time);
};

const getLast30Messages = async () => {
  const last30Messages = await messagesModel.getLast30Messages();
  if (last30Messages){
   return last30Messages.reverse();
  }
  return []
};

module.exports = { saveMessage, getLast30Messages };

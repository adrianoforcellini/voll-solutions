let clientsOn = [];
let clientsId = [];

const addClientsOn = (nickname, socketId) => {
  clientsOn.push(nickname);
  clientsId.push(socketId)
  return clientsOn;
}

const delClient = (socketId) => {
  const index = clientsId.indexOf(socketId)
  clientsId.splice(index, 1);
  clientsOn.splice(index, 1);
  return clientsOn;
}

module.exports = {addClientsOn, delClient}
const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...

const getAllClients = (request, response) => {
  response.status(200).json( {data: clients});
};

const getClientById = (request, response) => {
  const clientId = request.params.clientId;
  const client = clients.find((client) => client.id === clientId);
  if (!client) {
    return response.status(404).json({ error: "Client not found" });
  }
  response.status(200).json( {data: client} );
};

const postClient = (request, response) => {
  const { name, email } = request.body;
  const newClient = {
    id: uuidv4(),
    name,
    email,
  };
  clients.push(newClient);
  response.status(200).json({ data: newClient });
};

const deleteClient = (request, response) => {
  const clientId = request.params.clientId;
  const index = clients.findIndex((client) => client.id === clientId);
  if (index === -1) {
    return response.status(404).json({ error: "Client not found" });
  }
  clients.splice(index, 1);
  response.status(204).send();
};

module.exports = {
  getAllClients,
  getClientById,
  postClient,
  deleteClient,
};
const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...

const getAllClients = (req, res) => {
  res.status(200).json(clients);
};

const getClientById = (req, res) => {
  const clientId = req.params.clientId;
  const client = clients.find((c) => c.id === clientId);
  if (!client) {
    return res.status(404).json({ error: "Client not found" });
  }
  res.status(200).json(client);
};

const postClientEmail = (req, res) => {
  const clientId = req.params.clientId;
  const { email } = req.body;
  const client = clients.find((index) => index.id === clientId);
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }
  client.email = email;
  res.status(200).json(client);
};

const deleteClient = (req, res) => {
  const clientId = req.params.clientId;
  const index = clients.findIndex((c) => c.id === clientId);
  if (index === -1) {
    return res.status(404).json({ error: "Client not found" });
  }
  clients.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getAllClients,
  getClientById,
  postClientEmail,
  deleteClient,
};
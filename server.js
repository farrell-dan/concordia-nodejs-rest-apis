'use strict';

const express = require('express');
const morgan = require('morgan');
const{clients} = require('./data/clients');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get(`/clients`, (req, res) => {
    res.status(200).json(clients)
  })

  .get('/clients/:clientId', (req, res) => {
  const clientId = req.params.clientId;
  const client = clients.find((index) => index.id === clientId);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
  }
  res.status(200).json(client);
})

.post('/clients/:clientId/email', (req, res) => {
  const clientId = req.params.clientId;
  const { email } = req.body;
  const client = clients.find((index) => index.id === clientId);
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }
  client.email = email;
  res.status(200).json(client);
})

.delete('/clients/:clientId', (req, res) => {
  const clientId = req.params.clientId;
  const index = clients.findIndex((index) => index.id === clientId);
  if (index === -1) {
    return res.status(404).json({ error: 'Client not found' });
  }
  clients.splice(index, 1);
  res.status(204).send();
})


  .listen(8000, () => console.log(`Listening on port 8000`));

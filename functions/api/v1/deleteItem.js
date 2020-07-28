'use strict';

const { log } = require('firebase-functions/lib/logger');

// Express
const {
  buildExpress,
  toFirebaseFunction
} = require('../../helpers');

// DB
const { deleteDoc } = require('../../helpers/firebase');


// create
const deleteItem = buildExpress();

deleteItem.post('/:model', async (req, res) => {

  log('Start delete doc');

  try {

    const model = req.params.model;

    const response = await deleteDoc(model, req.params.id);
    log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    log(error);

    return res.status(500).send(error);
  }
});

module.exports = toFirebaseFunction(deleteItem);

'use strict';

const { log } = require('firebase-functions/lib/logger');

// Express
const {
  buildExpress,
  toFirebaseFunction
} = require('../../helpers');

// DB
const { getDoc } = require('../../helpers/firebase');


// get
const readItem = buildExpress();

readItem.get('/:model/:id', async (req, res) => {

  log('Start get doc');

  try {

    const model = req.params.model;

    const response = await getDoc(model, req.params.id);
    log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    log(error);

    return res.status(500).send(error);
  }
});

module.exports = toFirebaseFunction(readItem);

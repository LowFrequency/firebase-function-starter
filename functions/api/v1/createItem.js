'use strict';

const { log } = require('firebase-functions/lib/logger');
const { schema } = require('../../models/schema');

// Express
const {
  buildExpress,
  toFirebaseFunction,
  vaildateRequest
} = require('../../helpers');

// DB
const {
  setDoc,
  getDoc
} = require('../../helpers/firebase');


// create
const createItem = buildExpress();

createItem.post('/:model', async (req, res) => {

  log('Start create doc');

  try {

    const model = req.params.model;

    //Validate the request body has correct data
    vaildateRequest(schema, req.body);

    await setDoc(model, req.body);
    const response = await getDoc(model, req.body.id);
    log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    log(error);

    return res.status(500).send(error);
  }
});

module.exports = toFirebaseFunction(createItem);

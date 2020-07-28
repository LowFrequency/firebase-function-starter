'use strict';

const { log } = require('firebase-functions/lib/logger');

// Express
const {
  buildExpress,
  toFirebaseFunction
} = require('../../helpers');

// DB
const { getDocs } = require('../../helpers/firebase');

// get all
const readAll = buildExpress();

readAll.get('/:model', async (req, res) => {

  log('Start get docs');

  try {

    const model = req.params.model;

    const response = await getDocs(model);
    log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    log(error);

    return res.status(500).send(error);
  }
});

module.exports = toFirebaseFunction(readAll);

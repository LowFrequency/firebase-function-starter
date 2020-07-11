'use strict';

const Inflector = require('inflection');

const {
  setDoc,
  getDoc,
  getDocs,
  getDocsWhere,
  deleteDoc,
} = require('../helpers/firebaseDb');

//Express
const express = require('express');
const cors = require('cors');
const corsConfig = cors({ origin: true });
const app = express();
app.use(corsConfig);
app.options('*', corsConfig);

// create
app.post('/:model', async (req, res) => {

  console.log('Start create doc');
  const model = req.params.model;

  try {

    await setDoc(model, req.body);
    const response = await getDoc(model, req.body.id);
    console.log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    console.log(error);

    return res.status(500).send(error);
  }
});

// read all
app.get('/:model', async (req, res) => {

  console.log('Start get docs');
  const model = req.params.model;

  try {

    const response = await getDocs(model);
    console.log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    console.log(error);

    return res.status(500).send(error);
  }
});

// read item
app.get('/:model/:id', async (req, res) => {

  console.log('Start get doc');
  const model = req.params.model;

  try {

    const response = await getDoc(model, req.params.id);
    console.log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    console.log(error);

    return res.status(500).send(error);
  }
});

// update
app.put('/:model/:id', async (req, res) => {

  console.log('Start update doc');
  const model = req.params.model;

  try {

    await setDoc(model, req.body);
    const response = await getDoc(model, req.body.id);
    console.log('response', JSON.stringify(response));

    return res.status(200).send(response);
  } catch (error) {

    console.log(error);

    return res.status(500).send(error);
  }
});

// update
app.patch('/:model/:id', async (req, res) => {

  console.log('Start update doc');
  const model = req.params.model;

  try {

    await setDoc(model, req.body);
    const response = await getDoc(model, req.body.id);
    console.log('response', JSON.stringify(response));

    return res.status(200).send(response);
  } catch (error) {

    console.log(error);

    return res.status(500).send(error);
  }
});

// delete
app.delete('/:model/:id', async (req, res) => {

  console.log('Start delete doc');
  const model = req.params.model;

  try {

    const response = await deleteDoc(model, req.params.id);
    console.log('response', JSON.stringify(response));

    return res.status(200).send(response);

  } catch (error) {

    console.log(error);

    return res.status(500).send(error);
  }
})

module.exports.api = app;

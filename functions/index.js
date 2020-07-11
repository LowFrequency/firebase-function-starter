'use strict';

const functions = require('firebase-functions');

const { v1 } = require('./api/v1');

const onRequest = functions.region('asia-northeast1').https.onRequest;

exports.v1 = onRequest(v1);

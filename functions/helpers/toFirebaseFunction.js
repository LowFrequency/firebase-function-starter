const functions = require('firebase-functions');

const toFirebaseFunction = (app) => functions.region('asia-northeast1').https.onRequest(app);

module.exports = toFirebaseFunction;

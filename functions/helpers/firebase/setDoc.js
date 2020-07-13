'use strict';

const { model } = require('../../models');

//Firebase
const admin = require('firebase-admin');
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const setDoc = async (collection, item) => {
  try {
    const fullItem = model(collection, item);
    const res = await db.collection(collection).doc(`/${item.id}/`).set(fullItem);
    return res;
  } catch (error) {
    return new Error("Error: " + error);
  }
}

module.exports = setDoc;

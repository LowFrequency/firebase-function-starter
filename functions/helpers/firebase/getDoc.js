'use strict';

//Firebase
const admin = require('firebase-admin');
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const getDoc = async (collection, id) => {
  try {
    const doc = await db.collection(collection).doc(`/${id}/`).get();
    return { ...doc.data(), id: doc.id }
  } catch (error) {
    return new Error("Error: " + error);
  }
}

module.exports = getDoc;

'use strict';

//Firebase
const admin = require('firebase-admin');
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const deleteDoc = async (collection, id) => {
  try {
    const response = await db.collection(collection).doc(id).delete();
    return response;
  } catch (error) {
    return new Error("Error: " + error);
  }
}

module.exports = deleteDoc;

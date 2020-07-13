'use strict';

//Firebase
const admin = require('firebase-admin');
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const getDocsWhere = async (collection, field, search) => {
  try {
    const snapshot = await db.collection(collection).where(field, '==', Number(search)).get();
    return snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    });
  } catch (error) {
    return new Error("Error: " + error);
  }
}

module.exports = getDocsWhere;

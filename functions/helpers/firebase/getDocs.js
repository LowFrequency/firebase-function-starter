'use strict';

//Firebase
const admin = require('firebase-admin');
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

const getDocs = async (collection) => {
  try {
    const snapshot = await db.collection(collection).orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    });
  } catch (error) {
    return new Error("Error: " + error);
  }
}

module.exports = getDocs;

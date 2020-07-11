'use strict';

const { model } = require('../models');

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

const getDoc = async (collection, id) => {
  try {
    const doc = await db.collection(collection).doc(`/${id}/`).get();
    return doc.data();
  } catch (error) {
    return new Error("Error: " + error);
  }
}

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

const deleteDoc = async (collection, id) => {
  try {
    const response = await db.collection(collection).doc(id).delete();
    return response;
  } catch (error) {
    return new Error("Error: " + error);
  }
}

module.exports = {
  setDoc,
  getDoc,
  getDocs,
  getDocsWhere,
  updateDoc,
  deleteDoc,
};

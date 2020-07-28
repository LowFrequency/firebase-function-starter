'use strict';

const {
  createItem,
  readAll,
  readItem,
  updateItem,
  deleteItem
} = require('./src/api/v1');

module.exports.v1 = {
  createItem,
  readAll,
  readItem,
  updateItem,
  deleteItem
};

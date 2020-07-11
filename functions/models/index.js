"use strict";

const defaultModel = {
  createdAt: '',
  updatedAt: '',
};

const model = (type, item) => {
  switch (type) {
    default:
      return {...defaultModel, ...item};
  }
};

module.exports.model = model;

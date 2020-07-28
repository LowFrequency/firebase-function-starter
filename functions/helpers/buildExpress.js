const express = require('express');
const cors = require('cors');
const corsConfig = cors({ origin: true });

const buildExpress = () => {
  const app = express();

  app.use(corsConfig);
  app.options('*', corsConfig);

  return app;
};

module.exports = buildExpress;

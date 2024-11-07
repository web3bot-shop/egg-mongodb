'use strict';
const { MongoClient } = require('mongodb');

async function createOneClient(config, app) {
  app.logger.info(config.dbName);
  const client = new MongoClient(config.url, config.options);
  await client.connect();
  const db = client.db(config.dbName);
  app.beforeStart(async () => {
    app.logger.info('[egg-mongodb] init instance success');
  });
  return db;
}

module.exports = {
  initPlugin: app => {
    app.addSingleton('mongodb', createOneClient);
  },
};

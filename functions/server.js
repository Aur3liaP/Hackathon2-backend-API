const serverless = require('serverless');

const app= require('../app');

module.exports.handler = serverless(app);
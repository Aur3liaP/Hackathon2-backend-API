// const serverless = require("serverless-http");

// const app = require("../app");

// module.exports.handler = serverless(app);


const serverless = require("serverless-http");
const app = require("../app");  // Adjust the path according to your app's structure

module.exports.handler = serverless(app);
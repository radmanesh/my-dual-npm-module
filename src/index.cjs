// src/index.cjs
const { version } = require('../package.json');
const { testFunction } = require('./utils.cjs');

// A sample function to demonstrate a module
function greetCommonJS(name) {
  return `Hello from CommonJS, ${name}! (Version: ${version})`;
}

// Export for CommonJS
module.exports = {
  greetCommonJS,
  testFunction,
};
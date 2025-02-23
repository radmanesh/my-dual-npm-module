// Minimal test script using Node's assert
const assert = require('assert');

// Require the CommonJS module entry
const { greetCommonJS, testFunction } = require('../src/index.cjs');

// Dynamically import the ESM module entry
async function testESM() {
  const { greetESM } = await import('../src/index.mjs');
  return greetESM;
}

(async () => {
  // Test the CommonJS function
  const resultCJS = greetCommonJS('Alice');
  assert(resultCJS.includes('Alice'), 'CJS greeting should mention Alice');
  console.log('✅ greetCommonJS test passed.');

  // Test the ESM function
  const greetESM = await testESM();
  const resultESM = greetESM('Bob');
  assert(resultESM.includes('Bob'), 'ESM greeting should mention Bob');
  console.log('✅ greetESM test passed.');

  const a = await testFunction();
  assert(a, true);
  console.log('✅ testFunction test passed.');
})();
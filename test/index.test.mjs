// Minimal test script using Node's assert
import assert from 'assert';
import { testFunction } from '../src/index.mjs';

(async () => {
  const a = testFunction();
  assert(a, true);
  console.log('✅ testFunction test passed.');
})();

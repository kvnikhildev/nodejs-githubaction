const assert = require('assert');
const { add } = require('../app');

describe('Addition Function', function () {
  it('should return 5 for add(2, 3)', function () {
    assert.strictEqual(add(2, 3), 5);
  });

  it('should return -1 for add(1, -2)', function () {
    assert.strictEqual(add(1, -2), -1);
  });
});

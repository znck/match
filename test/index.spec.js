const test = require('ava')
const match = require('../index')

test('should parse path params', t => {
  t.deepEqual({ bar: '1' }, match('/foo/:bar', '/foo/1'))
})

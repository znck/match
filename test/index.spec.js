const test = require('ava')
const match = require('../index')

test('should parse path params', t => {
  t.deepEqual({ bar: '1' }, match('/foo/:bar', '/foo/1'))
})

test('should return empty object for non match', t => {
  t.deepEqual({}, match('/foo/:bar', '/foo'))
})

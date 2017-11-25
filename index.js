const pathToRegExp = require('path-to-regexp')

const patterns = {}

module.exports = function match(pattern, url) {
  if (pattern in patterns) return patterns[pattern].exec(url)

  const keys = []
  const re = pathToRegExp(pattern, keys)

  patterns[pattern] = {
    exec(url) {
      const matches = re.exec(url)

      if (!Array.isArray(matches)) return {}

      return matches.slice(1).reduce((params, match, i) => ({ ...params, [keys[i].name]: match }), {})
    }
  }

  return match(pattern, url)
}

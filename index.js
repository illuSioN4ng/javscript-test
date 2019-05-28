let _ = require('lodash')

const alwaysTrue = () => {
  return true
}

const legitString = str => {
  return _.isString(str) && str.length > 0
}

module.exports = {
  alwaysTrue,
  legitString
}

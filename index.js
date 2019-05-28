let _ = require('lodash')

const alwaysTrue = () => {
  return true
}

const legitString = str => {
  return _.isString(str) && str.length > 0
}

const errorLegitString = str => {
  return str.length > 0 && _.isString(str)
}

module.exports = {
  alwaysTrue,
  legitString,
  errorLegitString
}

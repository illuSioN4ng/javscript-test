require('babel-register')({
  presets: ['env']
})

module.exports = require('./index.test')

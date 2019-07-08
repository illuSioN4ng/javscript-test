require('babel-register')({
  presets: ['env']
})

// * 读取test文件夹下所有测试文件，并执行
var normalizedPath = require('path').join(__dirname, 'test')
require('fs')
  .readdirSync(normalizedPath)
  .forEach(function(file) {
    // require("./routes/" + file);
    require(`./test/${file}`)
  })

'use strict'

var fs = require('fs')

module.exports = {
  afterEnd: function(runner){
    var coverage = runner.page.evaluate(function(){
      return window.__coverage__
    })
    if(coverage){
      console.log('Writting coverage to coverage/coverage.json')
      fs.write('coverage/coverage.json',JSON.stringify(coverage),'w')
    } else {
      console.log('NO coverage data generated')
    }
  }
}

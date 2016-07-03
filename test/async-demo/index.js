'use strict'
require('should')
const mylib = require('../../async-demo/index')
setTimeout(() => {
  describe('My First Test', () => {
    it('Welcome to Tmall', () => {
      return mylib('Tmall').should.be.fulfilledWith('Welcome to Tmall')
    })
    it('Hello Taobao', () => {
      return mylib('Taobao').should.be.fulfilledWith('Hello Taobao')
    })
  })
  run()
}, 1000)

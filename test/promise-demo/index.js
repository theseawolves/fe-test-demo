'use strict'
require('should')
const mylib = require('../../promise-demo/index')
describe('promise demo test',()=>{
  it('Welcome to Tmall',()=>{
    return mylib('Tmall').should.be.fulfilledWith('Hello Tmall')
  })
})

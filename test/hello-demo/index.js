'use strict'
require('should')
const mylib = require('../../hello-demo/index')

describe('Hello Test',()=>{
  it('should get "Hello Tmall"',()=>{
    mylib().should.be.eql('Hello Tmall')
  })
})

'use strict'
require('should')
const mylib = require('../../callback-demo/index')

describe('callback demo test',()=>{
  it('Welcome to Tmall',done =>{
    mylib('Tmall',rst => {
      rst.should.be.eql('Hello Tmall')
      done()
    })
  })
})

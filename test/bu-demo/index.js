'use strict'
require('should')
const mylib = require('../../bu-demo/index')
let bu = 'none'
describe('bu demo test',()=>{
  before(()=> bu = 'Tmall')
  after(()=> bu = 'none')
  it('Welcome to Tmall',()=>{
    mylib(bu).should.be.eql('Hello Tmall')
  })
})

describe('bu demo test',()=>{
  before(()=> bu = 'Taobao')
  after(()=> bu = 'none')
  it('Welcome to Taobao',()=>{
    mylib(bu).should.be.eql('Hello Taobao')
  })
})

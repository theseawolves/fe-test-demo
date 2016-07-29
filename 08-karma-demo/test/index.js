
require('should')
var mylib = require('../src/index.js')
var bu = 'none'
describe('bu demo test',()=>{
  before(function(){ bu = 'Tmall'})
  after(function(){ bu = 'none'})
  it('Welcome to Tmall',function(){
    mylib(bu).should.be.eql('Hello Tmall')
  })
})

import { expect } from 'chai'
import fibonacci from '../src/fibonacci.js'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })
  it('should return the fibonacci sequence up to nth position', function(){
    expect(fibonacci(10)).to.eql([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(fibonacci(1)).to.eql([0, 1])
    expect(fibonacci(8)).to.eql([ 0, 1, 1, 2, 3, 5, 8, 13])
  })
})

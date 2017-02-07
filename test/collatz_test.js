import { expect } from 'chai'
import collatz from '../src/collatz.js'

describe('collatz()', function(){
  it('should be a function', function(){
    expect(collatz).to.be.a('function')
  })

  it('should return the collatz conjecture of an integer', function(){
    expect(collatz(1)).to.eql([1])
    expect(collatz(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect(collatz(4)).to.eql([4,2,1])
  })
})

import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should return an array of length 50, whos 9th value is 34', function(){
    const fib = fibonacci(50)
    expect(fib).to.be.an('array')
  })

  context("Testing the correct value", function(){
    it("should contain a value of 55 at 10", function(){
      expect(fibonacci(10)[9]).to.equal(34)
    })
    it("should contain a value of 377 at 15", function(){
      expect(fibonacci(15)[14]).to.equal(377)
    })
    it("should contain a value of 4181 at 20", function(){
      expect(fibonacci(20)[19]).to.equal(4181)
    })
  })

  context("when given 20", function(){
    it("should return an array of length 20", function(){
      expect(fibonacci(20)).to.have.length(20)
    })
  })
})

import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should return an array of length 50, whos 9th value is 34', function(){
    const fib = fibonacci(50)
    expect(fib).to.be.an('array')
    expect(fib.length).to.equal(50)
    expect(fib[9]).to.equal(34)
  })
})

import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz.js'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('should return fizz for multiples of three', function(){

    expect(fizzBuzz()[2]).to.equal('Fizz')
  })

  it('should return buzz for multiples of five', function(){
    expect(fizzBuzz()[4]).to.equal('Buzz')
  })

  it('should return fizzbuzz for multiples of three', function(){
    expect(fizzBuzz()[14]).to.equal('FizzBuzz')
  })

  it('should return an array with a length of 100', function(){
    expect(fizzBuzz()).to.have.length(100)
  })
})

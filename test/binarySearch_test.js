import { expect } from 'chai'
import binarySearch from '../src/binarySearch.js'

describe('binarySearch()', function() {
  it('should be a function', function() {
    expect(binarySearch).to.be.a('function')
  })

  it('should search for a number in an array and return its index', function() {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(numbers, 45)).to.equal(8)
  })

  it('should search for a number in an array and return its index', function() {
    const numbers = [5, 10, 15]
    expect(binarySearch(numbers, 5)).to.equal(0)
  })

  it('should search for a number in an array, return false if its not there', function() {
    const numbers = [1, 2, 3, 4]
    expect(binarySearch(numbers, 5)).to.equal(false)
  })
})

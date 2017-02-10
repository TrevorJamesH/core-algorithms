import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort.js'

describe('bubbleSort()', function() {
  it('should be a function', function() {
    expect(bubbleSort).to.be.a('function')
  })

  it('should sort through indices of an array', function() {
    expect(bubbleSort([4,3,2,1])).to.eql([1,2,3,4])
    expect(bubbleSort([10,2,7,5,8,3,6,1,4,9])).to.eql([1,2,3,4,5,6,7,8,9,10])
    expect(bubbleSort([10])).to.eql([10])
  })
})

import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  context("when given [9,4,6,8,7,5,1,3,2]", function(){
    it("should return [1,2,3,4,5,6,7,8,9]", function(){
      expect(bubbleSort([9,4,6,8,7,5,1,3,2])).to.eql([1,2,3,4,5,6,7,8,9])
    })
  })

  context("when given [5,5,5,9,105,5,5,1]", function(){
    it("should return [1,5,5,5,5,5,9,105]", function(){
      expect(bubbleSort([5,5,5,9,105,5,5,1])).to.eql([1,5,5,5,5,5,9,105])
    })
  })

  context("when given [456,9027,98]", function(){
    it("should return [98,456,9027]", function(){
      expect(bubbleSort([456,9027,98])).to.eql([98,456,9027])
    })
  })

  context("when given [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]", function(){
    it("should return [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10]", function(){
      expect(bubbleSort([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1])).to.eql([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10])
    })
  })
})

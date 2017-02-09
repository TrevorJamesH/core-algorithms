import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function(){

  it('should be a function', function(){
    expect(setCompliment).to.be.a('function')
  })

  context("when given [1,2,3,4] and [3,4,5,6]", function(){
    it("should return [5,6]", function(){
      expect(setCompliment([1,2,3,4], [3,4,5,6])).to.eql([5,6])
    })
  })

  context("when given [5,4,3,2,1] and [2,3,4,5,6]", function(){
    it("should return [6]", function(){
      expect(setCompliment([5,4,3,2,1], [2,3,4,5,6])).to.eql([6])
    })
  })

  context("when given [1,2,3,4] and [9,7,0]", function(){
    it("should return [9,7,0]", function(){
      expect(setCompliment([1,2,3,4], [9,7,0])).to.eql([9,7,0])
    })
  })

  context("when given [1,2,3,4] and []", function(){
    it("should return []", function(){
      expect(setCompliment([1,2,3,4], [])).to.eql([])
    })
  })


})

import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe.only('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  context("when given [1,2,3,4] and [3,4,5,6]", function(){
    it("should return [3,4]", function(){
      expect(setIntersection([1,2,3,4], [3,4,5,6])).to.eql([3,4])
    })
  })

  context("when given [5,4,3,2,1] and [2,3,4,5,6]", function(){
    it("should return [5,4,3,2]", function(){
      expect(setIntersection([5,4,3,2,1], [2,3,4,5,6])).to.eql([5,4,3,2])
    })
  })

  context("when given [1,2,3,4] and [9,7,0]", function(){
    it("should return []", function(){
      expect(setIntersection([1,2,3,4], [9,7,0])).to.eql([])
    })
  })

  context("when given [1,2,3,4] and []", function(){
    it("should return []", function(){
      expect(setIntersection([1,2,3,4], [])).to.eql([])
    })
  })


})

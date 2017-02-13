import { expect } from 'chai'
import connectedGraph from '../src/connectedGraph'

describe('connectedGraph()', function() {

  it('should be a function', function() {
    expect(connectedGraph).to.be.a('function')
  })

  context("when given a graph object", function() {
    it("should return true if its connected", function() {
      const graph = {
        'a': ['b', 'c'],
        'b': ['a', 'd'],
        'c': ['a', 'd'],
        'd': ['b', 'c'],
      }
      expect(connectedGraph(graph)).to.equal(true)
    })
  })

  context("when given a graph object", function(){
    it("should return true if its connected", function(){
      const graph = {
        'a': ['b', 'c'],
        'b': ['a', 'd'],
        'c': ['a', 'd'],
        'd': ['b', 'c'],
      }
      expect(connectedGraph(graph)).to.equal(true)
    })

    it("should return Wrong Data Type if you pass in an array", function(){
      const graph = [1,3,46,3,3,5,4]
      expect(connectedGraph(graph)).to.equal('Wrong Data Type')
    })

    it("should return Wrong Data Type if you pass in a string", function(){
      const graph = "Wrong Data"
      expect(connectedGraph(graph)).to.equal('Wrong Data Type')
    })
  })
})

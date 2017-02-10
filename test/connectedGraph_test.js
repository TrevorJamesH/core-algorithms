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

    it("should return false if its not connected", function() {
      const graph = {
        'a': ['b'],
        'b': ['a'],
        'c': ['d'],
        'd': ['c'],
      }
      expect(connectedGraph(graph)).to.equal(false)
    })
  })


})

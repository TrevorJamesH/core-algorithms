import setCompliment from '../src/setCompliment'
import dataTypeCheck from '../src/dataTypeCheck'

export default function connectedGraph(graph){

  if(!dataTypeCheck(graph,'object')){
    return "Wrong Data Type"
  }
  let allPoints = Object.keys(graph)
  let connected = []
  let toCheck = [allPoints[0]]

  while(toCheck.length>0) {
    let neighbors = graph[toCheck[0]]
    neighbors.map((point) => toCheck.push(point))
    connected.push(toCheck.shift())
    toCheck = setCompliment(connected,toCheck)
  }

  return setCompliment(connected,allPoints).length === 0
}

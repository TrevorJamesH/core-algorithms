import setCompliment from '../src/setCompliment'
export default function connectedGraph(graph){
  let allPoints = Object.keys(graph)
  let connected = []
  let toCheck = [allPoints[0]]

  while(toCheck.length>0){
    let neighbors = graph[toCheck[0]]
    neighbors.map((points) => toCheck.push(points))
    connected.push(toCheck.shift())
    toCheck = setCompliment(connected,toCheck)
  }

  return setCompliment(connected,allPoints).length === 0
}

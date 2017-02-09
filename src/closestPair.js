export default function closestPair(points) {

  let lowestDistance = pythagorean(points[0], points[1])
  let closestPoints = []

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if(points[i] !== points[j] && pythagorean(points[i], points[j]) < lowestDistance) {
        lowestDistance = pythagorean(points[i], points[j])
        closestPoints[0] = points[i]
        closestPoints[1] = points[j]
      }
    }
  }
  return {
    pair: closestPoints,
    distance: lowestDistance
  }
}

function pythagorean(startPoint, endPoint) {
  let distances = []
  distances[0] = Math.abs(startPoint[0] - endPoint[0])
  distances[1] = Math.abs(startPoint[1] - endPoint[1])
  return Math.sqrt( Math.pow(distances[0],2) + Math.pow(distances[1],2) )
}

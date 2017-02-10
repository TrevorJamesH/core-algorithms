export default function setInstersection(array, intersect) {

let result = []
  for(let i=0;i<array.length;i++) {
    let intersection = false
    for(let j=0;j<intersect.length;j++) {
      if(array[i] === intersect[j]) {
        intersection = true
      }
    }
    if(intersection === true) {
      result.push(array[i])
    }
  }
return result
}

export default function mergeSort(array) {

  if(!Array.isArray(array)) return "We can only sort arrays"
  if(array.length < 2) return array
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)
  return mergeBoth(mergeSort(left), mergeSort(right))
}

  function mergeBoth(left, right){
    let resultsArray = []
    while(left.length && right.length) {
      if(left[0] <= right[0]){
        resultsArray.push(left.shift())
      } else {
        resultsArray.push(right.shift())
      }
    }
    while(left.length) {
      resultsArray.push(left.shift())
    }
    while(right.length) {
      resultsArray.push(right.shift())
    }
    return resultsArray
  }

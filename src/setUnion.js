export default function setUnion(firstArray, secondArray){

  let concatArray = firstArray.concat(secondArray)
  let lastArray = concatArray.slice().sort()
  let resultsArray = []
  for (let i = 0; i < lastArray.length; i++) {
    if (lastArray[i + 1] !== lastArray[i]){
      resultsArray.push(lastArray[i])
    }
  }
  return resultsArray
}

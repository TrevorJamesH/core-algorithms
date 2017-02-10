import dataTypeCheck from '../src/dataTypeCheck'
export default function setUnion(firstArray, secondArray) {

if(!dataTypeCheck(firstArray,'array')) {
  return "Wrong Data Type"
}
if(!dataTypeCheck(secondArray,'array')) {
  return "Wrong Data Type"
}

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

import dataTypeCheck from '../src/dataTypeCheck'

export default function bubbleSort(array) {

  if(!dataTypeCheck(array,'array')) {
  	return "Wrong Data Type"
  }

  if(array.length < 2) return array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i -1); j++) {
      if(array[j] > array[j + 1]) {
        let tempArray = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tempArray
      }
    }
  }
  return array

}

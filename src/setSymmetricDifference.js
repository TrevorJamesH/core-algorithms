import dataTypeCheck from '../src/dataTypeCheck'
export default function setSymmetricDifference(array, difference) {

  if(!dataTypeCheck(array,'array')) {
    return "Wrong Data Type"
  }
  let combine = array.concat(difference)
  return combine.filter((n) => combine.indexOf(n) === combine.lastIndexOf(n))
}

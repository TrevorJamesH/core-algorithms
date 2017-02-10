export default function setSymmetricDifference(array, difference) {
  
  let combine = array.concat(difference)
  return combine.filter((n) => combine.indexOf(n) === combine.lastIndexOf(n))
}

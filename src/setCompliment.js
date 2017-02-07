export default function setInstersection(array, compliment){
  let combine = array.concat(compliment)
  return combine.filter((n) => combine.indexOf(n) === combine.lastIndexOf(n))
}

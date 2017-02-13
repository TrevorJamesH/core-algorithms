export default function dataTypeCheck(data,expectedType) {
  if(expectedType === 'array' && Array.isArray(data)) {
    return true
  }
  if(expectedType === 'object' && typeof data === 'object' && !Array.isArray(data)) {
    return true
  }
  if(expectedType === 'string' && typeof data === 'string') {
    return true
  }
  if(expectedType === 'number' && !isNaN(data)) {
    return true
  }
  return false
}

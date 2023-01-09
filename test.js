function narcissistic(value) {
  // Code me to return true or false
  const arr = String(value).split('').map(str => Number(str) ** 3).reduce((a, b) => a + b, 0)
  return (arr === value) ? true : false
}
console.log(narcissistic(7))
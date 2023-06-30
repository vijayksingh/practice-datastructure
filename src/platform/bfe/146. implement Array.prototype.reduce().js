

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this
  let argsLength = arguments.length
  if(arr.length === 0 && argsLength <= 1)
    throw new Error("Reduce of empty array with no initial value")

  let accumulator = argsLength === 1 ? arr[0] : initialValue
  let index = argsLength === 1 ? 1 : 0
  for (let i = index; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr)
  }
  return accumulator
}

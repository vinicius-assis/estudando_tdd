// Function to verify if is initial value equal undefined
const isInitialValueUndefined = (initialValue) => initialValue === undefined

const reduce = (arr, func, initialValue) => {
  // if initial value is undefined acc i'll be equal a first item from arr
  const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
  // if initial value is undefined arrCopy i'll be equal a arr without firs item
  const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr

  return(function reduceInternal(accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal
    // This function will use func to return next acc value
    const accNext = () => func(accInternal, head, counter, arrCopy)
    
    return arrInternal.length === 0 
      ? accInternal 
      : reduceInternal(accNext(), tail, counter + 1)

  })(acc, arrCopy, 0)
}

export default reduce
const every = (arr = [], func = (item) => item) => {
  return (function internalEvery(internalArray, counter) {
    const [inicio, ...resto] = internalArray

    return internalArray.length === 0 
      ? true
      : !func(inicio, counter, arr)
        ? false
        : internalEvery(resto, counter + 1)
    
  })(arr, 0)

  
}

export default every
const some = (arr, func) => {
  return(function internalSome(internalArray, counter) {
    const [inicio, ...resto] = internalArray

    return internalArray.length === 0 
      ? false
      : func(inicio, counter, arr) 
        ? true
        : internalSome(resto, counter + 1)

  })(arr, 0)
}

export default some
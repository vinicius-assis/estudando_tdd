const find = (arr, func) => {
  return(function internalFind(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    
    return arrayInternal.length === 0 
      ? undefined 
      : func(head, counter, arr) 
        ? head 
        : internalFind(tail, counter + 1)

  })(arr, 0)
}

export default find
const filter = (arr, func) => {
  return (function filterInternal(arrayInternal, counter) {
    const [inicio, ...resto] =  arrayInternal
    return arrayInternal.length === 0 
      ? [] 
      : (func(inicio, counter, arr) ? [inicio] : []).concat(...filterInternal(resto, counter + 1))
  })(arr, 0)
}

export default filter
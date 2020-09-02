const map = (arr = [], func = (item) => item ) => {
  return (function mapInternal(arrayInternal, counter) {
    const [inicio, ...resto] = arrayInternal
    return arrayInternal.length === 0 
      ? [] 
      : [func(inicio, counter, arr), ...mapInternal(resto, counter + 1)]
  })(arr, 0)  
}

export default map
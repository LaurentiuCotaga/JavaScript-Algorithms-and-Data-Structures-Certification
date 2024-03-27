function sumAll(arr) {
    const getMax = Math.max(arr[0], arr[1])
    const getMin = Math.min(arr[0], arr[1])
    let sum = 0
    for(let i = getMin; i <= getMax; i++) {
      sum += i
    }
    return sum
  }
 
  sumAll([1, 4]);


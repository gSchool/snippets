function fibonacci(i) {
  let cache = {};
  function innerFib(i) {
    if (i in cache) {
      console.log("cache hit for", i);
      return cache[i];
    }
    else {
      console.log("cache miss for", i);
    }
    if (i == 0 || i == 1) {
      return i;
    }
    else {
      let result = innerFib(i - 1) + innerFib(i - 2)
      cache[i] = result;
      return cache[i];
    }
  }
  return innerFib(i)
}

console.log(fibonacci(7))
console.log(fibonacci(7))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(8))

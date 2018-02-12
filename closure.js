function outerFunction() {
  counter = 0;
  return function innerFunction() {
    console.log(++counter);
  }
}

var closure = outerFunction();
closure();
closure();

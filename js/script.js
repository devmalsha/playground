function makeMultiplier(multiplier) {
  function myFunc(x) {
    return multiplier * x;
  }
  return myFunc;
}

let multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
let doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as a arguments

function doOperationOn(x, operation) {
  return operation(x);
}

let result = doOperationOn(5, multiplyBy3);
console.log(result);

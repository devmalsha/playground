//Example
let myArray = ["malsha", "gimhani", "ranasinghe"];

// let myObj = {
//   "First Name": "Malsha",
//   "Second Name": "Gimhani",
//   "Last Name": "Ranasignhe",
// };

// console.log(myObj);
// for (let myProperty in myObj) {
//   console.log(myProperty + ": " + myObj[myProperty]);
// }

// for (let names in myArray) {
//   console.log("Hello " + myArray[names]);
// }

// myArray.spouse = "Thedath";

// for (let names in myArray) {
//   console.log("Hello " + myArray[names]);
// }

function makeMultiplier(multiplier) {
  return function (x) {
    return multiplier * x;
  };
}
let doubleAll = makeMultiplier(2);
// console.log(doubleAll(2));
console.log(doubleAll(10));

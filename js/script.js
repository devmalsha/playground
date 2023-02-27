// let array = new Array();
// array[0] = "Malsha";
// array[1] = "1";
// array[2] = function (name) {
//   console.log("Hello");
// };
// array[3] = { course: "HTML, CSS & JS" };
// console.log(array);

// Example 1
let myArray = new Array();
myArray[0] = "Malsha";
myArray[1] = "Gimhani";
myArray[2] = function (firstName, secName) {
  console.log("Hello " + firstName + " " + secName + " !");
};
myArray[3] = { goal: "Learn web development" };
console.log(myArray[1]);
myArray[2](myArray[0], myArray[1]);

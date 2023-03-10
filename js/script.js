// function checkFunc() {
//   let number1 = document.getElementById("value1").value;
//   let number2 = document.getElementById("value2").value;
//   let result = number1 * 1 + number2 * 1;

//   if (number1 == "100" || number2 == "100" || result == "100") {
//     let display = "true";
//     document.getElementById("result").innerHTML = display;
//   } else {
//     display = result;
//     document.getElementById("result").innerHTML = display;
//   }
// }

// let checkFunc = (value1, value2) =>
//   value1 === 100 || value2 === 100 || value1 + value2 === 100;
// console.log(checkFunc(0, 100));
// console.log(checkFunc(100, 0));
// console.log(checkFunc(90, 10));
// console.log(checkFunc(40, 60));
// console.log(checkFunc(40, 0));

/* Exercise 2
 ------------------------ */

let findFileExtention = (fileName) => fileName.slice(fileName.lastIndexOf("."));
console.log(findFileExtention("fileName.doc"));
console.log(findFileExtention("fileName.js"));

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

// let findFileExtention = (fileName) => fileName.slice(fileName.lastIndexOf("."));
// console.log(findFileExtention("fileName.doc"));
// console.log(findFileExtention("fileName.js"));
// console.log(findFileExtention("fileName.config.js"));

/* Exercise 3 */
// function wordPlay(word) {
//   for (let i = 0; i < word.length; i++) {
//     let alphabet = [
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//       "g",
//       "h",
//       "i",
//       "j",
//       "k",
//       "l",
//       "m",
//       "n",
//       "p",
//       "q",
//       "r",
//       "s",
//       "t",
//       "u",
//       "v",
//       "w",
//       "x",
//       "y",
//       "z",
//     ];
//     for (let j = 0; j < alphabet.length; j++) {
//       if (alphabet[j] == word[i]) {
//         let letter = alphabet[j + 1];
//         if (letter == undefined) {
//           console.log("a");
//         } else {
//           console.log(letter);
//         }
//       }
//     }
//   }
// }

// wordPlay("malshza");

const moveCharForward = (word) => word.split("").map();

console.log(moveCharForward("abcd"));

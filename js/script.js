// Exercise part 2 - Ex -1
// const newString = (word) => {
//   if (word.length < 3) {
//     return word;
//   } else {
//     let newArrayIs = word.split("");
//     let myArrayFirstPart = newArrayIs.slice(0, 3);
//     let myArraySecondPart = newArrayIs.slice(-3).reverse();
//     return myArrayFirstPart.join("") + myArraySecondPart.join("");
//   }
// };
// console.log(newString("Malsha"));

const makeNewString = (word) =>
  word.length < 3 ? word : word.slice(0, 3) + word.slice(-3);
console.log(makeNewString("Malsha"));
console.log(makeNewString("Ranasinghe"));
console.log(makeNewString("Gimhani"));
console.log(makeNewString("Thedath"));
console.log(makeNewString("ad"));

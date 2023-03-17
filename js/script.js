// Part - 5 - Ex-1
// const alphabaticOrder = (str) => {
//   let arr = str.split("");
//   return arr.sort().join("");
// };
// console.log(alphabaticOrder("malsha"));

// const alphabaticOrder = (str) => {
//   let arr = str
//     .split("")
//     .sort((a, b) => (a > b ? 1 : -1))
//     .join("");
// };
// console.log(alphabaticOrder("malsha"));

// Ex-2
// let vowels = ["a", "e", "i", "o", "u"];
// const countVowels = (str) => {
//   let ele = str.split("");
//   let filterLength = "";
//   for (let i = 0; i < ele.length; i++) {
//     filterLength = ele.filter((x) => vowels.indexOf(x) > -1).length;
//   }
//   return filterLength;
// };
// console.log(countVowels("malsha"));

// let vowels = ["a", "e", "i", "o", "u"];
// const countVowels = (str) =>
//   str
//     .split("")
//     .filter((letterNeedToBeFind) => vowels.indexOf(letterNeedToBeFind) > -1)
//     .length;

// console.log(countVowels("javascript"));

// Ex-3
// LK coins - 20, 10, 5, 2, 1

let coinArray = [20, 10, 5, 2, 1];

let coinAmount = "";

let coinSelection = [];
const coinMaker = (amount) => {
  for (let i = 0; i < coinArray.length; i++) {
    coinAmount = Math.floor(amount / coinArray[i]);
    for (let j = 0; j < coinAmount; j++) {
      coinSelection.push(coinArray[i]);
    }

    amount = amount - coinArray[i] * coinAmount;
  }
  return coinSelection;
};

console.log(coinMaker(46));

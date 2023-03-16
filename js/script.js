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
let vowels = ["a", "e", "i", "o", "u"];
const countVowels = (str) => {
  let ele = str.split("");
  let filterLength = "";
  for (let i = 0; i < ele.length; i++) {
    filterLength = ele.filter((x) => vowels.indexOf(x) > -1).length;
  }
  return filterLength;
};
console.log(countVowels("malsha"));

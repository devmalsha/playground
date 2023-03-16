// Part - 5 - Ex-1
// const alphabaticOrder = (str) => {
//   let arr = str.split("");
//   return arr.sort().join("");
// };
// console.log(alphabaticOrder("malsha"));

const alphabaticOrder = (str) => {
  let arr = str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
};
console.log(alphabaticOrder("malsha"));

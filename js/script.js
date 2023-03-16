// part 4-Ex-1
// const leapYearFinder = (yearIs) =>
//   yearIs % 4 === 0 ? "Leap year" : "Not a leap year";

// console.log(leapYearFinder(2023));
// console.log(leapYearFinder(2022));
// console.log(leapYearFinder(2021));
// console.log(leapYearFinder(2020));

// Ex-2

// const checkEquality = (objectA, objectB) =>
//   Object.keys(objectA).every((prop) => objectB[prop]);

// console.log(checkEquality({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3, e: 4 }));

// Ex-3
// const create2DArray = (csvString) =>
//   csvString.split("\n").map((rowArray) => rowArray.split(","));

// let data = "abc, def, ghi\njkl, mno,pqr\nstu, vux, xya";
// console.log(create2DArray(data));

// const hexaDecimalCodeGen = () => {
//   let hexaCodeArray = ["#"];
//   for (let i = 0; i < 6; i++) {
//     let element1 = Math.floor(Math.random() * 16).toString(16);
//     hexaCodeArray.push(element1);
//   }
//   let word = hexaCodeArray.join("");
//   return word;
// };

// console.log(hexaDecimalCodeGen());

// const hexaDecimalCodeGen = () => Math.floor(Math.random() * 16).toString(16);

// const colorCodeGenerator = () =>
//   "#" + Array.from({ length: 6 }).map(hexaDecimalCodeGen).join("");

// console.log(colorCodeGenerator());
// console.log(colorCodeGenerator());
// console.log(colorCodeGenerator());
// console.log(colorCodeGenerator());

// Ex-5

const functionStatus = (dataArray, functionIs) =>
  dataArray.every(predirectedFunction);
const predirectedFunction = (ele) => ele > 0;
console.log(functionStatus([1, 2, 3, 0, 5], predirectedFunction));

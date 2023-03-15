// part 4-Ex-1
// const leapYearFinder = (yearIs) =>
//   yearIs % 4 === 0 ? "Leap year" : "Not a leap year";

// console.log(leapYearFinder(2023));
// console.log(leapYearFinder(2022));
// console.log(leapYearFinder(2021));
// console.log(leapYearFinder(2020));

// Ex-2

const checkEquality = (objectA, objectB) =>
  Object.keys(objectA).every((prop) => objectB[prop]);

console.log(checkEquality({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3, e: 4 }));

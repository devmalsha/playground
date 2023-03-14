// // Exercise part 3 - Ex -1
// const findEvenNumbers = function (myArray) {
//   return myArray.filter(findingEvenNumber).length;
//   function findingEvenNumber(items) {
//     return items % 2 == 0;
//   }
// };

// console.log(findEvenNumbers(["1", "2", "8", "4", "5", "6"]));

// Ex-2
const numberOfEvenValues = (number) => {
  let arrayOfEveneNumber = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      arrayOfEveneNumber.push(i);
    }
  }
  return arrayOfEveneNumber.length;
};

console.log(numberOfEvenValues("50"));
console.log(numberOfEvenValues("25"));
console.log(numberOfEvenValues("35"));
console.log(numberOfEvenValues("21"));

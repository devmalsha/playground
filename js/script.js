// // Exercise part 3 - Ex -1
// const findEvenNumbers = function (myArray) {
//   return myArray.filter(findingEvenNumber).length;
//   function findingEvenNumber(items) {
//     return items % 2 == 0;
//   }
// };

// console.log(findEvenNumbers(["1", "2", "8", "4", "5", "6"]));

// Ex-2
// const numberOfEvenValues = (number) => {
//   let arrayOfEveneNumber = [];
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 == 0) {
//       arrayOfEveneNumber.push(i);
//     }
//   }
//   return arrayOfEveneNumber.length;
// };

// console.log(numberOfEvenValues("50"));
// console.log(numberOfEvenValues("25"));
// console.log(numberOfEvenValues("35"));
// console.log(numberOfEvenValues("21"));

// Ex-3
// const findingArrayOrder = (arrayOfIntergers) => {
//   for (let i = 0; i < arrayOfIntergers.length; i++) {
//     if (arrayOfIntergers[i + 1] < arrayOfIntergers[i]) {
//       return "Not Assending";
//     }
//     return "Assending";
//   }
// };

// console.log(findingArrayOrder([1, 2, 3, 4]));
//

// Ex-4
// const findLargestEvenNumber = (numbersArray) => {
//   let evenNumbers = numbersArray.filter((EvenNumbers) => EvenNumbers % 2 == 0);
//   let highestEvenNumberIs = "";
//   for (let i = 0; i < evenNumbers.length; i++) {
//     evenNumbers[i] > evenNumbers[i + 1]
//       ? (highestEvenNumberIs = evenNumbers[i])
//       : (highestEvenNumberIs = evenNumbers[i + 1]);

//     return highestEvenNumberIs;
//   }
// };

// console.log(findLargestEvenNumber([3, 5, 8, 2, 4]));

const findLargestEvenNumber = (numbersArray) =>
  Math.max(...numbersArray.filter((EvenNumbers) => EvenNumbers % 2 == 0));
console.log(findLargestEvenNumber([3, 5, 8, 2, 4]));

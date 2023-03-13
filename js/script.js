// Exercise part 3 - Ex -1
const findEvenNumbers = function (myArray) {
  return myArray.filter(findingEvenNumber).length;
  function findingEvenNumber(items) {
    return items % 2 == 0;
  }
};

console.log(findEvenNumbers(["1", "2", "3", "4", "5", "6"]));

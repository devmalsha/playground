// Exercise part 2 - Ex -1
const newString = (word) => {
  if (word.length <= 3) {
    return word;
  } else {
    let newArrayIs = word.split("");
    let myArrayFirstPart = newArrayIs.slice(0, 3);
    let myArraySecondPart = newArrayIs
      .slice(newArrayIs.length - 3, newArrayIs.length)
      .reverse();
    return myArrayFirstPart.join("") + myArraySecondPart.join("");
  }
};
console.log(newString("Tth"));

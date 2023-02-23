// let company = new Object();
// company.name = "facebook";
// console.log(company);

let objectName = new Object();
objectName.firstProperty = "first value";
objectName.secondProperty = 2;

console.log(objectName);

objectName.anotherObject = new Object();
objectName.anotherObject.firstProperty = "first value of another object";
objectName.anotherObject.secondProperty = 1.2;

console.log(objectName["anotherObject"]);
console.log(objectName.anotherObject);
console.log(
  "Property/value of another object: " + objectName.anotherObject.firstProperty
);
objectName["thirdProperty"] = "3rd Value";
console.log(
  "Third property of the Parent object is: " + objectName["thirdProperty"]
);

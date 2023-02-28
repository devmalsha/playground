//Example
let myArray = ["malsha", "gimhani", "ranasinghe"];

let myObj = {
  "First Name": "Malsha",
  "Second Name": "Gimhani",
  "Last Name": "Ranasignhe",
};

console.log(myObj);
for (let myProperty in myObj) {
  console.log(myProperty + ": " + myObj[myProperty]);
}

function checkFunc() {
  let number1 = document.getElementById("value1").value;
  let number2 = document.getElementById("value2").value;
  let result = number1 * 1 + number2 * 1;

  if (number1 == "100" || number2 == "100" || result == "100") {
    let display = "true";
    document.getElementById("result").innerHTML = display;
  } else {
    display = result;
    document.getElementById("result").innerHTML = display;
  }
}

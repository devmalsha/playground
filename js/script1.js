function sayHello() {
  let name = document.getElementById("name").value;
  let messege = " <h2> Hello " + name + "! </h2>";

  document.getElementById("content").innerHTML = messege;
}

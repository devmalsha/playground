function sayHello() {
  let name = document.getElementById("name").value;
  let messege = " <h2> Hello " + name + "! </h2>";

  document.getElementById("content").innerHTML = messege;

  if (name === "student") {
    let tittle = document.querySelector("#tittle").textContent;
    tittle += " & Love it !";
    document.querySelector("#tittle").textContent = tittle;
  }
}

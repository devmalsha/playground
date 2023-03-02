document.addEventListener("DOMContentLoaded", function (event) {
  function sayHello(event) {
    this.textContent = "Said it!";
    let name = document.getElementById("name").value;
    let messege = " <h2> Hello " + name + "! </h2>";

    document.getElementById("content").innerHTML = messege;

    if (name === "student") {
      let tittle = document.querySelector("h1").textContent;
      tittle += " & Love it !";
      document.querySelector("h1").textContent = tittle;
    }
  }

  document.querySelector("button").addEventListener("click", sayHello);
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("button").addEventListener("click", function () {
    $ajaxUtility.sendGetRequest("./data/name.txt", function (request) {
      let name = request.responseText;
      document.querySelector("#content").innerHTML =
        "<h2> Hello " + name + " !";
    });
  });
});

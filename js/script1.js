(function (window) {
  let malshaGreeter = {};
  malshaGreeter.myName = "Malsha";
  malshaGreeter.sayHello = function () {
    console.log("Hello " + malshaGreeter.myName);
  };
  window.malshaGreeter = malshaGreeter;
})(window);

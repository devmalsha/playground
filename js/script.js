var message="Global Scope"
console.log("global: message = "+message);

var a = function (){
    var message = "inside a"
    console.log("global: message = "+message);
    b ();
}

function b () {
console.log("global: message = "+message);
}

a();
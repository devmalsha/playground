let a = 5;
let b = a;
console.log(a);
console.log(b);
b = 10;
console.log("After changing b, a is: " + a);
console.log("After changing b, b is: " + b);

let c = { x: 4 };
let d = c;
console.log(c);
console.log(d);

d.x = 3;
console.log(c);
console.log(d.x);

function Circle(radius) {
  this.rad = radius;
  this.getArea = function () {
    return Math.PI * Math.pow(this.rad, 2);
  };
}
const myCircle = new Circle(5);
console.log(myCircle.getArea());

// Example 2
function TreeSelector(height) {
  this.h = height;
  // console.log("hello1");
  this.categorizing = function () {
    // console.log("hello2");
    if (this.h > 5) {
      console.log("This is a tall tree");
    } else {
      console.log("This is a short tree");
    }
    return this.h;
  };
}

const treeType = new TreeSelector(8);
console.log(treeType.categorizing());

// Example 3

function MotorStatus(color) {
  this.color = color;
}
MotorStatus.prototype.colorCode = function () {
  if (this.color == "red") {
    console.log("Motor Stopped");
  } else if (this.color == "orange") {
    console.log("Motor Tripped");
  } else if (this.color == "green") {
    console.log("Motor Running");
  } else {
    console.log("Power failure");
  }
  return;
};

const motor1 = new MotorStatus("green");
motor1.colorCode();
console.log(motor1);

const motor2 = new MotorStatus("Orange");
motor2.colorCode();
console.log(motor2);

// callbacks,map , filter , find , sort

// Class

/*
const dog = {
    name : "doggie",
    legCount : 2,
    speaks : "bhow bhow"
};

const cat = {
    name : "cat",
    legCount : 2,
    speaks  : "meow meow"
}

function printStr(animal) {
    console.log("animal "+animal["name"]+" "+animal["speaks"]);
}

printStr(dog);
printStr(cat);
*/

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("Animal");
  }
  speak() {
    console.log("Hi there "+this.speaks);
  }
}

let dog1 = {
  name: "dog",
  legCount: 4,
  speaks: "bow bow",
};

Animal.myType();
let dog = new Animal("dog", 4, "bhow bhow");// Creating object 
let cat = new Animal("cat",4,"meow meow");
cat.speak(); // Call Function on object
dog.speak();

// Date 
const currentDate = new Date();

console.log(currentDate)

// Get Various components of the date 
console.log("Date:",currentDate.getDate());
console.log("Month:",currentDate.getMonth()+1); // Months are zero index, so +1 is added.
console.log("Year:",currentDate.getFullYear());
console.log("Hours:",currentDate.getHours());
console.log("Minutes",currentDate.getMinutes());
console.log("Seconds",currentDate.getSeconds());
currentDate.setFullYear(2025);
console.log("After setFullyear :",currentDate);

console.log("Time in milliSeconds : "+currentDate.getTime());
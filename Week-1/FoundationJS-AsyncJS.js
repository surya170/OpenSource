/*
console.log("Hello World");
console.log(a);
*/

/*
// Static and Dynamic 

*/

/*
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
*/

const user1 = {
  firstName: "harkirat",
  gender: "Male",
};

const allUsers = [
  {
    firstName: "harkirat",
    gender: "male",
  },
  {
    firstName: "raman",
    gender: "male",
    metadata: {
      age: 21,
      adress: "Hyderabad",
    },
  },
  {
    firstName: "Priya",
    gender: "Female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}

// Callback 
// Passing function as a argument to the other function to execute the function pass in the called function itself

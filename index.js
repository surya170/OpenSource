const express =  require("express");
const app = express();

app.use(express.json());

/*
  These is the request i am expecing 
  body {
    // title : string,
    // description : string
  }

*/

// To insert all todos
app.post("/todo", function(req,res) {
   
})

//To retrieve all todos
app.get("/todos",function(req,res){

})

// to update the articuar todo
app.put("/completed",function(req,res){

})
// write basic express boilerplate code.
// with express.json() middleware

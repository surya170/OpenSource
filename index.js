const express =  require("express");
const { createTodo } = require("./types");
const {todo} = require("./db")
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
app.post("/todo", async function(req,res) {
    // Validation
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb 
    //why these is wait becuaase the DB may be down  if we dont write await if DB down case also the Todo created msg will send Generally DB are not down but better or safe we use the call goes to DB wait until if it complete the success then u can work
   await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo created"
    })
    
})

//To retrieve all todos
app.get("/todos", async function(req,res){
      const todos = await todo.find({});
    //   console.log(todos) // promise'

     res.json({
        todos
     })

})

// to update the articuar todo
app.put("/completed",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id:req.body.id,
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked  as Completed"
    })
    
})
// write basic express boilerplate code.
// with express.json() middleware

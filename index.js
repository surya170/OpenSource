const express = require("express");
const app = express(); 
const bodyParser = require("body-parser")
//middleware
app.use(bodyParser.json())
const port = process.env.PORT || 3000;


app.get("/",function (req,res)  {
    res.send('<b>Hello World!</b>')
})

app.get("/route-handler",function (req,res) {
    //headers,body,query parameters 
    // do machine learning model code here
    res.json({
        name:"Surya",
        age:21
    })
})

app.post("/conversation",(req,res) => {
    console.log(req.headers['authorization']);
    console.log(req.body)
    res.send({
        msg: "2+2 = 4"
    })
})

app.listen(port)
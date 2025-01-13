/*
   * Todo {
       title : string,
       description: string,
         
    }

    
    cluster creds :
    usernme : suryanarayana13271
    password : gHmcye9lRxohRHrk
    

    url: 
    mongodb+srv://suryanarayana13271:gHmcye9lRxohRHrk@cluster0.0triu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    Use these url to connect 
    mongodb+srv://suryanarayana13271:gHmcye9lRxohRHrk@cluster0.0triu.mongodb.net/todo

*/

const monogoose = require("mongoose");

monogoose.connect("mongodb+srv://suryanarayana13271:gHmcye9lRxohRHrk@cluster0.0triu.mongodb.net/todo")

const todoSchema = monogoose.Schema({
    title : String,
    description : String,
    completed : Boolean 
})
const todo = monogoose.model('todos',todoSchema);
module.exports = {
    todo
}


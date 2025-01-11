const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    id : zod.string(),
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}

/*
   // 1st end point
   {
     title : string,
     description: string 
   }
   
   // for 3rd endpoint
   {
      id:string
   }

*/
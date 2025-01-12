const zod = require("zod")

// Define the schema for the input object
function validateInput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response.success);
}

validateInput({
    email:"abc@xyz.com",
    password: "12324244"  
})



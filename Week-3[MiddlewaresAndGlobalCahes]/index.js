const express = require("express"); // importing the library express
const app = express();

const zod = require("zod"); // importing the library zod for validation

// Code  with out middleware
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidndeyId = req.query.kidndeyId;

  if (username != "surya" && password != "pass") {
    res.status(400).json({ msg: "Something up with your inputs" });
  }
  if (kidndeyId != 1 && kidndeyId != 2) {
    res.status(400).json({ msg: "Something up wrong with your kidndeyId" });
  }
  // do something with the kidndeyId
  res.json({
    msg: "Your kidney is fine!",
  });

});
// Global Catches [ if any exception occur after all  prechecks completed then it will execute this code]
app.use(function(err,req,res,next){
   res.status(500).send('An Internal server error occured')    
})





app.listen(3000); // listening on port 3000

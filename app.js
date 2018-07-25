var express = require("express");
var app = express();


app.get("/", function(req,res){
  res.send("this will be the landing page soon");
});








//tell express to listen for request (start server)
app.listen(3000, function(){
  console.log("CampSights server has started on 3000");
});

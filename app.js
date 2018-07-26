var express = require("express");
var app = express();
var bodyParser = require("body-parser")

//sets file types for all responses to ejs
app.set("view engine", "ejs");




//root route with landing page
app.get("/", function(req,res){
  res.render("landing");
});

//campgrounds route with ejs file connected to render the obj
app.get("/campgrounds", function(req,res){
  var campgrounds = [
    {name: "Salmon Creek", image:"https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f2c57da1ebb4bf_340.jpg"},
    {name: "Granite Hill", image:"https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f2c57da1ebb4bf_340.jpg"},
    {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f2c57da1ebb4bf_340.jpg"}
  ]

  res.render("campgrounds", {campgrounds: campgrounds});
});



app.post("/campgrounds", function(req, res){

  res.send("you hit the route");

  //get data from form and add to campgrounds array

  //redirect back to campgrounds get route
});



//tell express to listen for request (start server)
app.listen(3000, function(){
  console.log("CampSights server has started on 3000");
});

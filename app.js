var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

//tells express to use body parser
app.use(bodyParser.urlencoded({extended: true}));
//sets file types for all responses to ejs
app.set("view engine", "ejs");


//connect Mongoose
//this will create the camp sights DB for us instead of mongodb
var options = {
 useNewUrlParser: true
 };

mongoose.connect('mongodb://127.0.0.1:27017/camp_sights', options).then(function(){
  console.log("we live baby!");
});


//SCHEMA Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

//Compile into a model
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//       name: "Mountain Goat's Rest",
//       image:"https://cdn.pixabay.com/photo/2014/06/04/16/36/car-repair-362150_960_720.jpg"
//   },  function(err, campground){
//     if (err){
//       console.log(err);
//     } else {
//       console.log("Newly creaetd campground : ");
//       console.log(campground);
//     }
//   });


//root route with landing page
app.get("/", function(req,res){
  res.render("landing");
});

//campgrounds route with ejs file connected to render the obj
app.get("/campgrounds", function(req,res){
  //get all camgrounds from DB
  Campground.find({}, function(err, allCamgrounds){
    if (err){
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCamgrounds});
    }
  });
});



app.post("/campgrounds", function(req, res){

  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image}
  campgrounds.push(newCampground);

  //redirect back to campgrounds get route
  res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function(req,res){
  res.render("new.ejs");
});

//tell express to listen for request (start server)
app.listen(3000, function(){
  console.log("CampSights server has started on 3000");
});

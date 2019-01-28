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

mongoose.connect('mongodb://localhost:27017/camp_sights', options).then(function(){
  console.log("we live baby!");
});

//Schema Setup
var Schema = mongoose.Schema;
var campgroundSchema = new Schema({
  name: String,
  image: String,
  description: String
});

//Compile into a model
//The first argument is the singular name of the collection your model is for.
//Mongoose automatically looks for the plural version of your model name.
var Campground = mongoose.model("Campground", campgroundSchema);


//root route with landing page
app.get("/", function(req,res){
  res.render("landing");
});

//Index Route - show all campgrounds
app.get("/campgrounds", function(req,res){
  //get all camgrounds from DB
  Campground.find({}, function(err, allCamgrounds){
    if (err){
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCamgrounds});
    }
  });
});


//Create Route - add new campground to DB
app.post("/campgrounds", function(req, res){

  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image}
  //create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreate){
    if (err) {
      console.log(err);
    } else {
      //redirect back to campgrounds get route
      res.redirect("/campgrounds");
    }
  });
});



//New - show form to create new campground
app.get("/campgrounds/new", function(req,res){
  res.render("new.ejs");
});
//Show - shows more info about one campgrpound
app.get('/campgrounds/:id', function(req,res){
  //find the campground with provided id
  Campground.findById(req.params.id, function(error, foundCampground){
    if (error) {
      console.log(error)
    } else {
      //render show template on that one campground
      res.render("show.ejs", {campground: foundCampground});
    }
  })
});

//tell express to listen for request (start server)
app.listen(3000, function(){
  console.log("CampSights server has started on 3000");
});


















// //-------------------
// //Dummy data
// Campground.create(
//   {
//     name: "Granite Hill",
//     image: "https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg",
//     description: "This is a huge Granite Hill, no bathrooms. No water, but beautiful"
//   },
//   function(err, campground){
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('newly created campground');
//       console.log(campground);
//     }
//   });
// //---------------------

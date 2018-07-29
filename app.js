var express = require("express");
var app = express();
var bodyParser = require("body-parser")


//tells express to use body parser
app.use(bodyParser.urlencoded({extended: true}));
//sets file types for all responses to ejs
app.set("view engine", "ejs");

var campgrounds =
[
  {name: "Salmon Creek", image:"https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144297f7c870a0efb4_340.jpg"},
  {name: "Granite Hill", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f2c670aeeab7b9_340.jpg"},
  {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144297f7c870a0efb4_340.jpg"},
  {name: "Salmon Creek", image:"https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144297f7c870a0efb4_340.jpg"},
  {name: "Granite Hill", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f2c670aeeab7b9_340.jpg"},
  {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144297f7c870a0efb4_340.jpg"},
  {name: "Salmon Creek", image:"https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144297f7c870a0efb4_340.jpg"},
  {name: "Granite Hill", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f2c670aeeab7b9_340.jpg"},
  {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144297f7c870a0efb4_340.jpg"}
];

//root route with landing page
app.get("/", function(req,res){
  res.render("landing");
});

//campgrounds route with ejs file connected to render the obj
app.get("/campgrounds", function(req,res){
  res.render("campgrounds", {campgrounds: campgrounds});
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

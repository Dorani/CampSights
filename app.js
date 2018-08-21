var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

//tells express to use body parser
app.use(bodyParser.urlencoded({extended: true}));
//sets file types for all responses to ejs
app.set("view engine", "ejs");

var campgrounds =
[
  {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_960_720.jpg"},
  {name: "Granite Hill", image:"https://cdn.pixabay.com/photo/2014/05/03/00/42/vw-camper-336606_960_720.jpg"},
  {name: "Mountain Goat's Rest", image:"https://cdn.pixabay.com/photo/2014/06/04/16/36/car-repair-362150_960_720.jpg"},
  {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2015/07/09/01/59/picnic-table-837221__340.jpg"},
  {name: "Granite Hill", image:"https://cdn.pixabay.com/photo/2016/04/28/15/49/airstream-1359135__340.jpg"},
  {name: "Mountain Goat's Rest", image:"https://cdn.pixabay.com/photo/2016/08/14/01/53/campground-1591949__340.jpg"},
  {name: "Salmon Creek", image:"https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197__340.jpg"},
  {name: "Granite Hill", image:"https://cdn.pixabay.com/photo/2018/05/16/15/49/camper-3406137__340.jpg"},
  {name: "Mountain Goat's Rest", image:"https://cdn.pixabay.com/photo/2017/07/17/16/21/nature-2512944__340.jpg"}
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

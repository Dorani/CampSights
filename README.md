# CampSights
Full Stack App


## 1st Step:

    - In the terminal:
      - npm init
      - npm install express ejs --save
      - initialize app to listen for request on localhost:3000
      - create root route with ejs template:

- Add Landing Page route using EJS
- Add Campgrounds Page route that lists campgrounds

# Each Campground has:
- Name
- Image
  - an array and each item in the array is an object
  - each one has a name and image in key val pairs:

        - [
        {name: "Salmon Creek", image: "http://www.image.com"},
        {name: "Salmon Creek", image: "http://www.image.com"},
        {name: "Salmon Creek", image: "http://www.image.com"},
        {name: "Salmon Creek", image: "http://www.image.com"},
        {name: "Salmon Creek", image: "http://www.image.com"}
        ]


## 2nd Step:

### Layout and Basic Styling

- Create our header and footer partials
- Add in Bootstrap

### Creating New campgrounds

- Setup new campground POST route
    - add it to the array
- Add in body-parser
    - imported correctly and configured
- Setup route to show form
    - so user can send post
- Add basic un-styled form

### Style the Campgrounds Page

- Add a better header/tit;e
- make campgrounds display in a grid

### Style the Navbar and form

- Add a navbar to all templates
- Style the new campground form

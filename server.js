const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("./controllers/passport_controller");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// const STRIPE_SECRET_KEY = require('./constants/stripe');
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const routes = require("./routes");
var db = require("./models");

//what is secret code used for?
app.use(session({
  secret: 'bootcamp project',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("body-parser").text());

//passport does not work with app.use(routes);
// app.use(routes);


require("./controllers/productController.js")(app);
require("./controllers/cartProductController.js")(app);
require("./controllers/cartController.js")(app);
require("./controllers/customerController.js")(app);
require('./routes/api/passport_routes.js')(app);

/*
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
*/

if(process.env.NODE_ENV === 'production') {
  db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  });
} else {
  db.sequelize.sync({force:true}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  });
}


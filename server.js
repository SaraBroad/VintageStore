const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("./controllers/passport_controller");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const STRIPE_SECRET_KEY = require('./constants/stripe');
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const routes = require("./routes");
var db = require("./models");
const app = require("express")();

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

app.use(routes);


// require('./controllers/passport_controller.js')(passport, db.passports);
// require("./routes/api/passport_routes.js")(router, passport);
require('./routes/api/passport_routes.js')(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


if(process.env.NODE_ENV === 'production') {
  db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  });
} else {
  db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  });
}


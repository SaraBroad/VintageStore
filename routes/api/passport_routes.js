const router = require("express").Router();
const passport = require("../../controllers/passport_controller");
const db = require("../../models")

module.exports = function(router) {

    // router.get("/signup", passportController.signup);

    router.post('/api/signup', passport.authenticate('local-signup', {
        failWithError: true
    }),
        (req, res, next) => {
            res.status(200).send({
                redirectTo: "/home"
            });
        },
        (err, req, res, next) => {
            console.log(err);
            res.status(500).send(err);
        }
    )


  // sign in route loads private.handlebars after log in
  router.post('/api/signin', passport.authenticate('local-signin', {
    failWithError: true
  }),
    (req, res, next) => {
      res.status(200).send({
        redirectTo: '/home'
      });
    },
    (err, req, res, next) => {
      console.log(err);
      res.status(500).send(err);
    }
  );

  // router.get("/private", isLoggedIn, function (req, res) {
  //   res.render(path.join(__dirname, "../views/private.handlebars"));
  // });

  // logout, redirect to home page
  router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  // checks if logged in and authenticated  
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  }
};




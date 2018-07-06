const router = require("express").Router();
const passportController = require("../../controllers/passport_controller");
const db = require("../../models");

module.exports = function(app, passport) {
    router.post('/api/signin', passport.authenticate('local-signin', {
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

};



// module.exports = function(app, passport) {



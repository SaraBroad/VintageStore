const router = require("express").Router();
const passportController = require("../../controllers/passport_controller");

module.exports = function(app, passport) {

};



// module.exports = function(app, passport) {

// // router.post('/api/signin', passport.authenticate('local-signin', {
// //     failWithError: true
// // }),
// //     (req, res, next) => {
// //         res.status(200).send({
// //             redirectTo: "/home"
// //         });
// //     },
// //     (err, req, res, next) => {
// //         console.log(err);
// //         res.status(500).send(err);
// //     }
// // )

// };
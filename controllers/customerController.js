const db = require("../models");

module.exports = function(app) {

    app.post("/api/createCust", function (req, res) {
        console.log(req.body)

        db.Customer.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            addressOne: req.body.addressOne,
            addressTwo: req.body.addressTwo,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone,
            email: req.body.email,

        })
        .then(function (dbCustomer) {
            console.log(dbCustomer)
            res.json(dbCustomer);
        });
    });

    app.get("/api/customer/:email", function (req, res) {
        db.Customer.findOne({
                where: {
                    email: req.params.email
                }
            })
            .then(function (dbCustomer) {
                console.log(res.json(dbCustomer))
                // res.json(dbCustomer);
            });
    });


};

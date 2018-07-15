const db = require("../models");

module.exports = function(app) {

    app.get("/api/customer/:email", function (req, res) {
        console.log(req.body)
        db.Customer.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (dbCustomer) {
                console.log("this is the dbCustomer")
                console.log(res.json(dbCustomer))
                // res.json(dbCustomer);
            });
    });


};

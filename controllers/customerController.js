const db = require("../models");

module.exports = function(app) {

    app.get("/api/customer/:email", function (req, res) {
        db.Customer.findOne({
                where: {
                    email: req.params.email
                }
            })
            .then(function (dbCustomer) {
                console.log("this is the dbCustomer")
                console.log(res.json(dbCustomer))
                // res.json(dbCustomer);
            });
    });


};

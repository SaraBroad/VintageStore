const db = require("../models");

module.exports = function (app) {

    app.get("/api/customer/:email", function (req, res) {
        db.Customer.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (dbCustomer) {
                //     console.log("this is the dbCustomer")
                //   return res.json(dbCustomer)   
                // console.log(req.user);    
                db.Cart.create({
                        CustomerId: req.user.id,
                    })
                    .then(function (dbCart) {
                        // console.log(dbCart);
                        return res.json({cartId: dbCart.dataValues.id});


                    });
            })
    });




};

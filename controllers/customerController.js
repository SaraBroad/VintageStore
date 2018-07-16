const db = require("../models");

module.exports = function(app) {

    app.get("/api/customer/:email", function (req, res) {``
        db.Customer.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (dbCustomer) {
                console.log("this is the dbCustomer")
              return res.json(dbCustomer)        
            }).then(function (data){
                
                db.Cart.create({
                    customerId: data.req.user.id,
                })
                .then(function (dbCart) {
                    console.log(dbCart)
                    res.json(dbCart);
                });
            } )
    });

   


};

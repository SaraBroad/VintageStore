const db = require("../models")


module.exports = function(app) {

    app.post("/api/createCart", function (req, res) {

        db.Cart.create({
            customerId: req.body.id
        })
        .then(function (dbCart) {
            console.log(dbCart)
            res.json(dbCart);
        });
    });


};
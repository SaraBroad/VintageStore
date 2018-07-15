const db = require("../models")


module.exports = function(app) {

    app.post("api/cartProduct", function (req, res) {

        db.CartProduct.create({
            productId: req.body.productId
        })
        .then(function (dbCartProduct) {
            console.log(dbCartProduct)
            res.json(dbCartProduct);
        });
    });


};
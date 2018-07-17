const db = require("../models")


module.exports = function(app) {

    app.post("/api/cartProduct", function (req, res) {
        console.log(req.body)

        db.CartProduct.create({
            productId: req.body.productId,
            cartId: req.body.cartId
        })
        .then(function (dbCartProduct) {
            console.log(dbCartProduct)
            res.json(dbCartProduct);
        });
    });


};
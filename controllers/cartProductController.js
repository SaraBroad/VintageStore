const db = require("../models")


module.exports = function(app) {

    app.post("/api/cartProduct", function (req, res) {
        console.log(req.body)

        db.CartProduct.update({
            where: {
            productId: req.body.id,
            cartId: req.body.id
            }
        })
        .then(function (dbCartProduct) {
            // console.log(dbCartProduct)
            res.json(dbCartProduct);
        });
    });

    app.get("/api/allCartProducts", function (req, res) {

        db.CartProduct.findAll({}).then(function (dbCartProduct) {
            // console.log(dbCartProducts);
            res.json(dbCartProduct);
        })
        .catch( err => res.json(err) );
    })


};
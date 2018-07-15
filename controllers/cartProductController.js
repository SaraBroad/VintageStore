const db = require("../models")


module.exports = function(app) {

    app.post("/api/cartProduct", function (req, res) {
        console.log(req.body.id)

        db.CartProduct.create({
            productId: req.body.id,
        })
        .then(function (dbCartProduct) {
            console.log(dbCartProduct)
            res.json(dbCartProduct);
        });
    });


};
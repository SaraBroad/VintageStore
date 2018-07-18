const db = require("../models")


module.exports = function(app) {

    app.post("/api/cartProduct", function (req, res) {
        // console.log(req.body)

        db.CartProduct.create({
            productId: req.body.productId,
            cartId: req.body.cartId
        })
        .then(function (dbCartProduct) {
            // console.log(dbCartProduct)
            res.json(dbCartProduct);
        });
    });

    app.get("/api/allCartProducts", function (req, res) {

        db.CartProduct.findAll({

        }).then(function (dbCartProducts) {
            var productsArray = [];
            for (var i =0; i<dbCartProducts.length; i++) {
                // console.log("this is for loop cart products", dbCartProducts[i].dataValues.productId)
                productsArray.push(dbCartProducts[i].dataValues.productId)
            }
                db.Product.findAll({
                    where: {
                        id: productsArray
                    }
                })
                
                .then(function (dbProducts) {
                    console.log("these are the products", dbProducts)
                    res.json(dbProducts);
                });
            
        })
        .catch( err => res.json(err) );
    })


};
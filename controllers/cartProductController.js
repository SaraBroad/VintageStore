const db = require("../models")


module.exports = function (app) {

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

    app.get("/api/allCartProducts/:id", function (req, res) {

        db.CartProduct.findAll({
            where: {
                cartId: req.params.id
            }
        }).then(function (dbCartProducts) {
            var productsArray = [];
            for (var i = 0; i < dbCartProducts.length; i++) {
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
            .catch(err => res.json(err));
    })

    app.get("/api/subtotalbycartid/:id", function (req, res) {
        db.CartProduct.findAll({
            where: {
                cartId: req.params.id
            }
        }).then(function (dbCartProducts) {
            var productIds = [];
            for (var i = 0; i < dbCartProducts.length; i++) {
                productIds.push(dbCartProducts[i].dataValues.productId)
            }
            db.Product.findAll({
                where: {
                    id: productIds
                }
            })
                .then(function (dbProducts) {
                    console.log("THIS IS TO GET THE PRICE ARRAY", dbProducts)
                    res.json(dbProducts);
                });
        })
            .catch(err => res.json(err));
    })

    app.post("/api/checkout", function (req, res) {
        console.log(req.body)
        var purchaseData = {
            CustomerId: req.body.CustomerId,
            ShippingCost: req.body.ShippingCost,
            SubtotalCost: req.body.SubtotalCost,
            TotalCost: req.body.TotalCost,
            PaymentDate: req.body.PaymentDate
        }
        db.PurchaseHistory.create(purchaseData)
            .then(function (dbPurchaseHistory) {
                res.json(dbPurchaseHistory)
            })
    })
};


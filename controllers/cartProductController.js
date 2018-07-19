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

    app.get("/api/allsubtotal", function (req, res) {

        db.CartProduct.findAll({

        }).then(function (dbCartProducts) {
            var productIds = [];
            for (var i =0; i<dbCartProducts.length; i++) {
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
        .catch( err => res.json(err) );
    })



};

/*
  Let's assume 3 person objects with an attribute age.
  The first one is 10 years old,
  the second one is 5 years old,
  the third one is 40 years old.
*/
// Project.sum('age').then(sum => {
//     // this will return 55
//   })
  
//   Project.sum('age', { where: { age: { [Op.gt]: 5 } } }).then(sum => {
//     // will be 50
//   })
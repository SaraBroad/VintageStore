const db = require("../models")


module.exports = function(app) {

    app.post("/api/createCart", function (req, res) {
        // console.log(req.body.id)
        db.Cart.create({
            CustomerId: req.body.id
        })
        .then(function (dbCart) {
            // console.log(dbCart)
            res.json(dbCart);
        });
    });

    app.get("/api/cart/:id", function(req, res) {
        db.Cart.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbCart) {
            res.json(dbCart);
          });
      });
    
    app.delete("/api/deleteCart/:id", function(req, res) {
        db.Cart.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbCart) {
            res.json(dbCart);
          });
      });


    
    // app.post("/api/checkout", function(req, res) {
    //     db.PurchaseHistory.create({

    //     })
    // })

        // app.get("/api/subtotal/:id", function(req, res){
    //     db.Cart.findOne({
    //       where: {
    //           CustomerId: req.body.id
    //       }
    //     })
    //     .then(function)
    // })
    // app.get("/api/subtotal", function(req, res){
    //     db.CartProduct.findOne({
    //       where: {
    //         cartId: req.body.cartId
    //       }
    //     }).then(dbCartProduct){
    //       db.CartProduct.findAll({

    //       })
    //     }
    // })


};
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
};
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


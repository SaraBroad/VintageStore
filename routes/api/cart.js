const db = require("../../models")
const router = require("express").Router();

module.exports = function (router) {

    router.post("/api/cartadd", function (req, res) {
        req.body = //we the obj you passed in
        //get user id from request.body
        //find cart associate with that user db.Cart.findOne where userId = id from req.body
        db.Cart.findOne({
            where: {
                userid: req.params.id
            }
        })
        .then(function (dbProduct) {
            res.json(dbProduct);
            //use cart id gained from this query --> db.cart.findOne where cart id = one we found
            //respond that this was added
        });
    });
};
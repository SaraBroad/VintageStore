const db = require("../../models")
const router = require("express").Router();

module.exports = function (router) {

    router.post("/add", function (req, res) {

        db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (dbProduct) {
            res.json(dbProduct);
        });
    });


};
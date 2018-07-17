const db = require("../../models")
const router = require("express").Router();
var express = require("express");

router.get("/products", function (req, res) {

    db.Product.findAll({}).then(function (dbProducts) {
        console.log(dbProducts);
        res.json(dbProducts);
    });
})


router.get("/products/:id", function (req, res) {
    db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (dbProduct) {
            res.json(dbProduct);
        });
});


router.get("/products/update/:id", function (req, res) {
    db.Product.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        .then(function (dbProduct) {
            res.json(dbProduct);
        });
});



module.exports = router;
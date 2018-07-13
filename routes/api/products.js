const db = require("../../models")


module.exports = function (router) {

    router.get("/products", function (req, res) {

        db.Product.findAll({}).then(function (dbProducts) {

            res.json(dbProducts);
        });
    });


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


    router.put("/products/update/:id", function (req, res) {
        db.Product.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbProduct) {
                res.json(dbProduct);
            });
    });



};
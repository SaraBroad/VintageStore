const router = require("express").Router();
const productController = require("../../controllers/productController");

router
  .route("/all")
  .get(productController.findAll);

module.exports = router;


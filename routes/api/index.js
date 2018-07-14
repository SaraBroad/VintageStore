var express = require("express");
const router = require("express").Router();
const passportRoutes = require("./passport_routes");
const customerRoutes = require("./customer");
const payment = require("./payment");
const products = require("./products"); 
const cartProduct = require("./cartProduct"); 

// Article routes
router.use("/signup", passportRoutes);
router.use("/signin", passportRoutes);
router.use("/charge", payment);
router.use("/products", products);
router.use("/products/:id", products);
router.use("/products/update/:id", products);
router.use("/add", cartProduct);
router.use("/customer", customerRoutes);



module.exports = router;





var express = require("express");
const router = require("express").Router();
const passportRoutes = require("./passport_routes");
const payment = require("./payment");
// const products = require("./products"); 
// const cartProduct = require("./cartProduct"); 

// Article routes
router.use("/signup", passportRoutes);
router.use("/signin", passportRoutes);
router.use("/charge", payment);
// router.use("/api/products", products);
// router.use("/api/products/:id", products);
// router.use("/api/products/update/:id", products);
// router.use("/api/add", cartProduct);
// router.use("/api/customer", customerRoutes);



module.exports = router;





const router = require("express").Router();
const passportRoutes = require("./passport_routes");
const customerRoutes = require("./customer");
const payment = require("./payment");
const products = require("./products"); 

// Article routes
router.use("/signup", passportRoutes);
router.use("/signin", passportRoutes);
router.use("/charge", payment);
// router.use("/all", products);
router.use("/customer", customerRoutes);



module.exports = router;





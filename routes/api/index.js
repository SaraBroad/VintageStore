const router = require("express").Router();
const passportRoutes = require("./passport_routes");
const payment = require("./payment");
const products = require("./products"); 

// Article routes
router.use("/signup", passportRoutes);
router.use("/signin", passportRoutes);
router.use("/charge", payment);
router.use("/all", products);



module.exports = router;





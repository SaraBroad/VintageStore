const router = require("express").Router();
const payment = require("./payment");
const products = require("./products"); 


router.use("/charge", payment);
router.use("/all", products);



module.exports = router;





const router = require("express").Router();
const payment = require("./payment");

// NYT routes
router.use("/charge", payment);



module.exports = router;





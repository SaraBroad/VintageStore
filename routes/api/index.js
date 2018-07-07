const router = require("express").Router();
const passportRoutes = require("./passport_routes");

// Article routes
router.use("/signup", passportRoutes);
router.use("/signin", passportRoutes);


module.exports = router;
const path = require("path");
const router = require("express").Router();
//example below
// const apiRoutes = require("./api");

// API Routes
//example below
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
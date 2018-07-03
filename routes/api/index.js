const router = require("express").Router();
//import individual routes pages here
//ex. const articleRoutes = require("./articles");


//set-up routes here
//ex. router.use("/articles", articleRoutes);


module.exports = router;

const paymentApi = require('../payment');

const configureRoutes = app => {
  paymentApi(app);
};

module.exports = configureRoutes;
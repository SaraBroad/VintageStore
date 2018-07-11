const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
};
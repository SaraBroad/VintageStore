var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var PurchasedItems = sequelize.define("purchasedItems", {
        //not sure what goes here yet since all we need everything else is either auto-created or foreign

    })

    return PurchasedItems;
};
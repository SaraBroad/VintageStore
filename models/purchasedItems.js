var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var PurchasedItems = sequelize.define("PurchasedItems", {
        //not sure what goes here yet since all we need everything else is either auto-created or foreign

    })

    PurchasedItems.associate = function (models) {
        PurchasedItems.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return PurchasedItems;
};
var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var PurchasedItem = sequelize.define("PurchasedItem", {
        //not sure what goes here yet since all we need everything else is either auto-created or foreign

    })

    PurchasedItem.associate = function (models) {
        PurchasedItem.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return PurchasedItem;
};
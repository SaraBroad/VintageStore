var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var PurchasedItems = sequelize.define("PurchasedItems", {
    })
    PurchasedItems.associate = function (models) {
        PurchasedItems.belongsTo(models.Products, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return PurchasedItems;
};
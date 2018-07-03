var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var PurchasedItem = sequelize.define("PurchasedItem", {
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
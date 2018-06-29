var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var PurchasedItems = sequelize.define("purchasedItems", {
        //not sure what goes here yet since all we need everything else is either auto-created or foreign

    })

    PurchasedItems.associate = function (models) {
        PurchasedItems.belongsTo(models.PurchasedHistory, {
            foreignKey: {
                allowNull: false
            }
        }),
            PurchasedItems.hasOne(models.Products, {
                foreignKey: {
                    allowNull: false
                }
            })
            // PurchasedItems.hasOne(models.Products, {
            //     foreignKey: {
            //         allowNull: false
            //     }
            // }) is productPrice a foreign key? 
    }
    return PurchasedItems;
};
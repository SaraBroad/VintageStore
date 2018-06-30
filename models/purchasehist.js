var Sequelize = require("sequelize");

//table to input items
module.exports = function (sequelize, DataTypes) {
    var purchaseHistory = sequelize.define("PurchaseHistory", {

        PaymentDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        SubtotalCost: {
            type: DataTypes.Decimal,
            allowNull: false
        },
        ShippingCost: {
            type: DataTypes.Decimal,
            allowNull: false
        },
        TotalCost: {
            type: DataTypes.Decimal,
            allowNull: false
        }
    });
    
    return purchaseHistory;
}
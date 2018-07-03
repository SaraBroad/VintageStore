var Sequelize = require("sequelize");

//table to input items
module.exports = function (sequelize, DataTypes) {
    var purchaseHistory = sequelize.define("PurchaseHistory", {
        PaymentDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        SubtotalCost: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        ShippingCost: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        TotalCost: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
    
    return purchaseHistory;
}
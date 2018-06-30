var Sequelize = require("sequelize");

//table to input items
module.exports = function (sequelize, DataTypes) {
    var PurchaseHistory = sequelize.define("PurchaseHistory", {
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
    })

    PurchaseHistory.associate = function(models) {
        PurchaseHistory.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    
    return PurchaseHistory;
}
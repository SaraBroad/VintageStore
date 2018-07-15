var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
    })
    Cart.associate = function (models) {
 
        Cart.belongsToMany(models.Product, {
            through: "CartProduct",
            as: "CartCartProduct",
            foreignKey: "cartId"
        })
        
        Cart.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Cart;
};
var Sequelize = require("sequelize");

//table to input items
module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        inStock: {
            type: DataTypes.STRING,
            inStock: true,
            allowNull: false
        },
        imageOne: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageTwo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageThree: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Product.associate = function (models) {
        Product.belongsToMany(models.Cart, {
            through: "CartProduct",
            as: "CartCartProduct",
            foreignKey: "productId"
        });
    }
    return Product;
  
}
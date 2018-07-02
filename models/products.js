var Sequelize = require("sequelize");

//table to input items
module.exports = function (sequelize, DataTypes) {
    var Products = sequelize.define("Products", {
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
            allowNull: false
        }
    });
    return Products;
}
var Sequelize = require("sequelize");

var Items = sequelize.define("items", {

    itemName: {
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
        type: DataTypes.STRING,
        allowNull: false
    },
    inStock: {
        type: DataTypes.STRING,
        inStock: true,
        allowNull: false
    }
});
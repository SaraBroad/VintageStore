var Sequelize = require("sequelize");
//need connection to db

//table for guests to input shipping information without creating an account
module.exports = function (sequelize, DataTypes) {
    var Guest = sequelize.define("guest", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressOne: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressTwo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        }
    });
    return Guest;
};
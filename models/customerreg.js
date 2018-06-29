var Sequelize = require("sequelize");
//need connection to db

//table for customers to register for an account
module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("customer", {
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
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordConfirm: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Customer;
};


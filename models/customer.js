var Sequelize = require("sequelize");
//need connection to db

//table for customers to register for an account
module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        addressOne: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        addressTwo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            validate: {
                len: [1]
              }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
          }      
   
    })

    return Customer;
};






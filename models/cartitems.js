// var Sequelize = require("sequelize");

// module.exports = function (sequelize, DataTypes) {

//     var CartItems = sequelize.define("cartItems", {
//         //CartItemsID
//         //productID
//         //productprice
//   

//     })

//     CartItems.associate = function (models) {
//         CartItems.belongsTo(models.Cart, {
//             foreignKey: {
//                 allowNull:false
//             },
        
            //get productID to attach to CartItems
            //get productPrice from productID

            //CartItems.hasOne(models.Product, {
            // foreignKey: {
                // allowNull: false
            // }
            // })


//         })
//     }
//     return CartItems;
// };

// //cartitems belongs to cart bc cartitems can't be created with cart id
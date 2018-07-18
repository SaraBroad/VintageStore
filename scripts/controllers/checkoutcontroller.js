//NO LONGER USING

// const db = require("../../models");

// module.exports = function(app) {
//     app.get("/api/allCartProducts", function(req, res){
//         CartProduct.findAll({})
//         .then(function(dbCartProduct){
//             db.Cart.findOne({
//                 where: {
//                     id: req.body.cartId
//                 }
//             })
//             .then(function(dbCart){
//                 db.Cart.findOne({
//                     where: {
//                         id: req.body.customerId
//                     }
//                 })
//                 .then(function(dbCart){
//                     db.PurchaseHistory.create({
//                         SubtotalCost: additionofallthings,
//                         PaymentDate: Date(),
//                         ShippingCost: 5.00,
//                         customerId: req.body.customerId,
//                         TotalCost: SubtotalCost+ShippingCost
//                     })
//                     .then(function(dbPurchaseHistory){
//                         db.Cart.destroy({
//                             where: {
//                                 id: req.body.cartId
//                             }
//                         })
//                     })
//                 })
//             })
//         })
//     });
// }

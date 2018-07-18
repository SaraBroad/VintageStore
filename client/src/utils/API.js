import axios from 'axios';
//axios is middleware capability to connect react to server

export default {

    //get customer to see if in DB

    getSavedCust: function () {
        return axios.get("/api/checkUser")
    },
    custLogin: function (signinData) {
        return axios.post("/api/signin", signinData);
    },
    saveCustomer: function (customerData) {
        return axios.post("/api/signup", customerData);
    },
    getProducts: function() {
        return axios.get("/api/products");
    },
    getProductsID: function(id) {
        return axios.get(`/api/products/${id}`)
    },
    addToCartProduct: function(productId) {
        return axios.post("/api/cartProduct", {productId, cartId: sessionStorage.getItem('cartId')});
    },
    getCustomerByEmail: function(email) {
        return axios.get("api/customer/" + email);
    },
    createCart: function(customerId) {
        return axios.post("/api/createCart", customerId);
    },
    getCartById: function(id) {
        return axios.get("api/cart/" + id);
    },
    getCartProducts: function() {
        return axios.get("api/allCartProducts");
    },
    deleteCart: function(id) {
        return axios.get("api/deleteCart/" + id);
    },
    logOut: function() {
        return axios.get("/logout");
    },
    getPurchaseHistory: function() {
        return axios.get("api/producthistory")
    },
    calcSubTotal: function() {
        return axios.put("/api/subtotal");
    },
    calcTotalPrice: function() {
        return axios.put("/api/total");
    },
    createCheckout: function(checkoutData) {
        return axios.post("/api/checkout", checkoutData)
    }
    
//api/cartremove
}

// cartData = {
//     user_id: 12345,
//     product_id: 12345
// }


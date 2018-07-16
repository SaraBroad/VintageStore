import axios from 'axios';

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
    getProductById: function(id) {
        return axios.get("api/products/" + id);
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
    deleteCart: function(id) {
        return axios.get("api/deleteCart/" + id);
    },
    logOut: function() {
        return axios.get("/logout");
    }
    
//api/cartremove
}

// cartData = {
//     user_id: 12345,
//     product_id: 12345
// }


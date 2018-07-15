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
    addToCartProduct: function(cartData) {
        return axios.post("/api/cartProduct", cartData);
    },
    getCustomerByEmail: function(email) {
        return axios.get("api/customer/" + email);
    },
    createCart: function(customerData) {
        return axios.post("/api/createCart", customerData);
    },
    logOut: function() {
        return axios.get("/logout");
    }
    //post product to cart

}




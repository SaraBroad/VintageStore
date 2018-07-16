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
    addToCart: function(cartData) {
        return axios.post("/api/cartadd", cartData);
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


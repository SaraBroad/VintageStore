import axios from 'axios';

export default {
    custLogin: function (signinData) {
        return axios.post("/api/signin", signinData);
    },
    
    saveCustomer: function (customerData) {
        return axios.post("/api/customer", customerData);
    }

    //api/cart

    //addToCart

    //

}


// $.ajax("/api/signin", {
//     type: "POST",
//     data: signin
// }).then(
//     function (response) {
//         window.location.href = response.redirectTo;
//     },
//     function(error) {
//         $this.find('.message:first').text('Username and/or password incorrect');
//     }
// );



// EXAMPLES
// getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
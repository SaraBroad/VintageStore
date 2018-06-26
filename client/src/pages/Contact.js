import React, { Component } from 'react';
import ContactCard from "../components/ContactCard";

class Contact extends Component {
    render () {
        return (
            <div>
                <ContactCard />
            </div>
        )
    }
}

export default Contact;


//    <div class="container">
//    <div class="row">
//        <div class="col-md-8">
//            <section class="main-section">
//                <h2>Contact Form</h2>
//                <form>
//                    <div class="form-group row">
//                        <label for="name">Name</label>
//                        <input type="text" id="name" name="name" class="form-control" placeholder="Name" required="required">
//                    </div>
//                    <div class="form-group row">
//                        <label for="email">Email</label>
//                        <input type="email" id="email" name="email" class="form-control" placeholder="example@gmail.com" required="required">
//                    </div>
//                    <div class="form-group row">
//                        <label for="phone">Phone Number</label>
//                        <input type="number" id="phone" name="phone" class="form-control" placeholder="(215) 555-5555" required="required">
//                    </div>
//                    <div class="form-group row">
//                        <label for="message">Message</label>
//                        <textarea id="message" name="message" class="form-control" rows="5" placeholder="Send me a message!" required="required"></textarea>
//                    </div>
//                    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
//                </form>
//            </section>
//        </div>
//    </div>
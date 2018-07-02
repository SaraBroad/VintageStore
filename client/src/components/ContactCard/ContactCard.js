import React from "react";
import "./ContactCard.css";

const ContactCard = props => (
    <div className="container">
    <h1>Contact Us</h1>
        <section className="main-section">
            <form>
                <div className="form-group row">
                    <label htmlFor="name">Name</label>
                    <input
                        className="input-bar form-control"
                        name="name"
                        type="text"
                        placeholder="Name"
                        id="name"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="email">Email</label>
                    <input
                        className="input-bar form-control"
                        name="name"
                        type="email"
                        placeholder="Email"
                        id="email"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        className="input-bar form-control"
                        name="name"
                        type="text"
                        placeholder="Phone Number"
                        id="phone"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="message">Leave a Message</label>
                    <input
                        className="input-bar message-form form-control"
                        name="message"
                        type="text"
                        placeholder="Leave a message here"
                        id="message"
                        rows="5"
                    />
                </div>
                <button type="submit" id="submit" class="btn btn-primary contact-button">Submit</button>
            </form>
        </section>
    </div>
)

export default ContactCard;


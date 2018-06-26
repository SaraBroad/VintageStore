import React from "react";
import "./CheckoutCard.css";

const CheckoutCard = props => (
    <div className="checkout-card">
        {/* insert modal */}
        <button type="button" className="btn btn-primary">Log-in or Register</button>
        {/* checkout as guest */}
        <div className="cust-info">
        <h3>Shipping Information</h3>
            <label htmlFor="cust-name">Name</label>
            <input
                className="custinput-bar"
                name="cust-name"
                type="text"
                className="form-control"
                placeholder="Name"
                id="cust-name"
            />
           <label htmlFor="cust-address">Street Address 1</label>
            <input
                className="custinput-bar"
                name="cust-address"
                type="text"
                className="form-control"
                placeholder="Street Address 1"
                id="cust-address"
            />
           <label htmlFor="cust-addresstwo">Street Address 2</label>
            <input
                className="custinput-bar"
                name="cust-addresstwo"
                type="text"
                className="form-control"
                placeholder="Street Address 2"
                id="cust-addresstwo"
            />
            <label htmlFor="city">City</label>
            <input
                className="custinput-bar"
                name="city"
                type="text"
                className="form-control"
                placeholder="City"
                id="city"
            />
            <label htmlFor="state">State</label>
            <input
                className="custinput-bar"
                name="state"
                type="text"
                className="form-control"
                placeholder="State"
                id="state"
            />
           <label htmlFor="zip">Zip Code</label>
            <input
                className="custinput-bar"
                name="zip"
                type="text"
                className="form-control"
                placeholder="Zip Code"
                id="zip"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
                className="custinput-bar"
                name="phone"
                type="number"
                className="form-control"
                placeholder="Phone Number"
                id="phone"
            />
           <label htmlFor="email">E-mail</label>
            <input
                className="custinput-bar"
                name="email"
                type="email"
                className="form-control"
                placeholder="E-mail"
                id="email"
            />
        </div>

         <div className="bill-info">
         <h3>Billing Information</h3>
         <label htmlFor="billcust-name">Name</label>
            <input
                className="custinput-bar"
                name="billcust-name"
                type="text"
                className="form-control"
                placeholder="Name"
                id="billcust-name"
            />
           <label htmlFor="billcust-address">Street Address 1</label>
            <input
                className="custinput-bar"
                name="billcust-address"
                type="text"
                className="form-control"
                placeholder="Street Address 1"
                id="billcust-address"
            />
           <label htmlFor="billcust-address2">Street Address 2</label>
            <input
                className="custinput-bar"
                name="billcust-addresstwo"
                type="text"
                className="form-control"
                placeholder="Street Address 2"
                id="billcust-addresstwo"
            />
            <label htmlFor="bill-city">City</label>
            <input
                className="custinput-bar"
                name="bill-city"
                type="text"
                className="form-control"
                placeholder="City"
                id="bill-city"
            />
           <label htmlFor="bill-state">State</label>
            <input
                className="custinput-bar"
                name="bill-state"
                type="text"
                className="form-control"
                placeholder="State"
                id="billstate"
            />
            <label htmlFor="bill-zip">Zip Code</label>
            <input
                className="custinput-bar"
                name="bill-zip"
                type="text"
                className="form-control"
                placeholder="Zip Code"
                id="billzip"
            />
            <label htmlFor="bill-phone">Phone Number</label>
            <input
                className="custinput-bar"
                name="bill-phone"
                type="number"
                className="form-control"
                placeholder="Phone Number"
                id="bill-phone"
            />
            <label htmlFor="bill-email">Email</label>
            <input
                className="custinput-bar"
                name="bill-email"
                type="email"
                className="form-control"
                placeholder="E-mail"
                id="bill-email"
            />
        </div>

        <div className="charge-info">
        <h3>Payment Information</h3>
        <label htmlFor="card-name">Name on card</label>
            <input
                className="custinput-bar"
                name="card-name"
                type="text"
                className="form-control"
                placeholder="Name on card"
                id="card-name"
            />
        <label htmlFor="card-number">Enter card number</label>
            <input
                className="custinput-bar"
                name="card-number"
                type="number"
                className="form-control"
                placeholder="Card Number"
                id="card-number"
            />
         <label htmlFor="cvv">CVV</label>
            <input
                className="custinput-bar"
                name="cvv"
                type="number"
                className="form-control"
                placeholder="CVV"
                id="cvv"
            />
            {/* Expiration */}
        

        </div>


    </div>
);

export default CheckoutCard;
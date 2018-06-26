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
                className="custinput-bar form-control"
                name="cust-name"
                type="text"
                placeholder="Name"
                id="cust-name"
            />
           <label htmlFor="cust-address">Street Address 1</label>
            <input
                className="custinput-bar form-control"
                name="cust-address"
                type="text"
                placeholder="Street Address 1"
                id="cust-address"
            />
           <label htmlFor="cust-addresstwo">Street Address 2</label>
            <input
                className="custinput-bar form-control"
                name="cust-addresstwo"
                type="text"
                placeholder="Street Address 2"
                id="cust-addresstwo"
            />
            <label htmlFor="city">City</label>
            <input
                className="custinput-bar form-control"
                name="city"
                type="text"
                placeholder="City"
                id="city"
            />
            <label htmlFor="state">State</label>
            <input
                className="custinput-bar form-control"
                name="state"
                type="text"
                placeholder="State"
                id="state"
            />
           <label htmlFor="zip">Zip Code</label>
            <input
                className="custinput-bar form-control"
                name="zip"
                type="text"
                className="form-control"
                placeholder="Zip Code"
                id="zip"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
                className="custinput-bar form-control"
                name="phone"
                type="number"
                placeholder="Phone Number"
                id="phone"
            />
           <label htmlFor="email">E-mail</label>
            <input
                className="custinput-bar form-control"
                name="email"
                type="email"
                placeholder="E-mail"
                id="email"
            />
        </div>

         <div className="bill-info">
         <h3>Billing Information</h3>
         <label htmlFor="billcust-name">Name</label>
            <input
                className="custinput-bar form-control"
                name="billcust-name"
                type="text"
                placeholder="Name"
                id="billcust-name"
            />
           <label htmlFor="billcust-address">Street Address 1</label>
            <input
                className="custinput-bar form-control"
                name="billcust-address"
                type="text"
                placeholder="Street Address 1"
                id="billcust-address"
            />
           <label htmlFor="billcust-address2">Street Address 2</label>
            <input
                className="custinput-bar form-control"
                name="billcust-addresstwo"
                type="text"
                placeholder="Street Address 2"
                id="billcust-addresstwo"
            />
            <label htmlFor="bill-city">City</label>
            <input
                className="custinput-bar form-control"
                name="bill-city"
                type="text"
                placeholder="City"
                id="bill-city"
            />
           <label htmlFor="bill-state">State</label>
            <input
                className="custinput-bar form-control"
                name="bill-state"
                type="text"
                placeholder="State"
                id="billstate"
            />
            <label htmlFor="bill-zip">Zip Code</label>
            <input
                className="custinput-bar form-control"
                name="bill-zip"
                type="text"
                placeholder="Zip Code"
                id="billzip"
            />
            <label htmlFor="bill-phone">Phone Number</label>
            <input
                className="custinput-bar form-control"
                name="bill-phone"
                type="number"
                placeholder="Phone Number"
                id="bill-phone"
            />
            <label htmlFor="bill-email">Email</label>
            <input
                className="custinput-bar form-control"
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
                className="custinput-bar form-control"
                name="card-name"
                type="text"
                placeholder="Name on card"
                id="card-name"
            />
        <label htmlFor="card-number">Enter card number</label>
            <input
                className="custinput-bar form-control"
                name="card-number"
                type="text"
                placeholder="Card Number"
                id="card-number"
            />
         <label htmlFor="cvv">CVV</label>
            <input
                className="custinput-bar form-control"
                name="cvv"
                type="text"
                placeholder="CVV"
                id="cvv"
            />
            {/* Expiration */}
        
            <button type="button" className="btn btn-primary submit">Submit</button>
        </div>


    </div>
);

export default CheckoutCard;
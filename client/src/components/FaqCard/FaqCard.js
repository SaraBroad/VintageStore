import React from "react";
import "./FaqCard.css";

const FaqCard = props => (
    <div className="container">
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <div className="questions">
            <div>
                <p className="q">What is your return policy?</p>
                <p>Insert text here</p>
            </div>

            <div>
                <p className="q">How do your clothes fit?</p>
                <p>Insert text here</p>
            </div>

            <div>
                <p className="q">What are your shipping options?</p>
                <p>Insert text here</p>
            </div>

            <div>
                <p className="q">What payment options do you have available?</p>
                <p>Insert text here</p>
            </div>
        </div>
    </div>
);

export default FaqCard;
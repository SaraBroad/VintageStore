import React from "react";
import "./FaqCard.css";

const FaqCard = props => (
    <div className="container dritaContainer">
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <div className="questions">
            <div>
                <p className="q">What is your return policy?</p>
                <p>We know that ordering things online can be a gamble since you can’t touch the items or try anything on, and because of that we try our best to be very return-friendly. However, as in life, there are certain rules that must be followed so that we can help you out!
                <li>Any items you purchased must be returned within 30 days of shipping and all items are only eligible for store credit issued in the form of a gift card.</li>
                <li>Returned items must remain un-washed and unworn.</li>
                <li>Anything purchased with any form of personalization is a FINAL SALE and is not eligible for return.</li>
                <li>Anything purchased at a discounted price is a FINAL SALE and is not eligible for return.</li>
            </p>
            </div>

            <div>
                <p className="q">How do your clothes fit?</p>
                <p>As we are selling what are often, one of a kind , vintage pieces, each item tends to have a different fit depending on style. We try to be as descriptive as possible in our descriptions, however, if you have any questions concerning individual item fits, please contact us immediately through www.ZANAvintage.com/contactus or straight to contact@zanavintage.com.</p>
            </div>

            <div>
                <p className="q">What are your shipping options?</p>
                <p>We offer standard UPS/USPS shipping within the United States and Canada. If you are interested in purchasing items for shipping to locations outside of the US and Canada, please contact us and we will get back to you within 24 hours!</p>
            </div>

            <div>
                <p className="q">What payment options do you have available?</p>
                <p>We process all payments through Stripe payment services.</p>
            </div>
        </div>
    </div>
);

export default FaqCard;
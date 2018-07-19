import React, { Component } from "react";
import API from "../../utils/API";
import "./Details.css";


class Details extends Component {
  state = {
    products: []
  };

  
  render() {
    return (
        <div>
            <button
            className="detailsButton"
            role="button"
            aria-label="click item"
            onClick={this.handleProductID}
            >More Details</button>
        </div>   
    );
  }
}

export default Details;
import React, { Component } from "react";
import data from "./products.json";

class ItemPage extends Component {
  state = {
    item: {
      a: 'b'
    }
  };

  componentDidMount() {
    // make an api call to something like get /api/products/this.props.match.params.id 
    // set state on success response
  }

  render() {
    return (
      <div className="container">
        {this.props.match.params.id}
        {this.state.item.a}
      </div>
    );
  }
}

export default ItemPage;

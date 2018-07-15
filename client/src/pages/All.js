import React, { Component } from "react";
import data from "./products.json";
import Gallery from "../components/Gallery";
import {
  Route,
  Link
} from 'react-router-dom'


// class All extends Component {
//   state = {
//     data : []
//   };

//   componentDidMount() {
//     API.getProducts().then(data => this.setState({ data }));
//   }

class All extends Component {
  state = {
    data
  };

  componentDidMount() {
    this.setState({ data: this.state.data });
  }

  render() {

    return (
      <div className="container">
        <div className="row text-center text-lg-left">
          {this.state.data.map(item => (
            <Gallery
              Image1={item.Image1}
              Image2={item.Image2}
              Image3={item.Image3}
              name={item.name}
              id={item.id}
              size={item.Size}
              price={item.Price}
              description={item.Description}
            />

          ))}
        </div>
      </div>
    );
  }
}

export default All;

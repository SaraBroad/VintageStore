import React, { Component } from "react";
import data from "./images.json";
import Gallery from "../components/Gallery";


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
              src={item.Image2}
              name={item.name}
              id={item.id}
              size={item.Size}
              description={item.Description}
            />

          ))}
        </div>
      </div>
    );
  }
}

export default All;

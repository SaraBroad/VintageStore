import React, { Component } from "react";
import images from "./images.json";
import Gallery from "../components/Gallery";

class All extends Component {
  state = {
    images
  };

  componentDidMount() {
    this.setState({ images: this.state.images });
  }


  render() {
    return (
      <div>
        {this.state.images.map(item => (
          <Gallery
            image2={item.image2}
            name={item.name}
            id={item.id}
            size={item.Size}
            description={item.description}
          />
        ))}

      </div>
    );
  }
}

export default All;


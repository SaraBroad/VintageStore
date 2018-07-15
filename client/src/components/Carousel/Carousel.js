import React from "react";
import {Carousel} from "react-bootstrap";
import {
  Route,
  Link
} from 'react-router-dom';
import API from "../../utils/API";
// import "./../../pages/products.json";


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      displayName: true
    };
  }

  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }

  
    render() {
      const { index, direction } = this.state;
      const Image3 = this.props.Image3 ? <Carousel.Item>
      <img className="d-block h-400 w-100" src={this.props.Image3} />
      </Carousel.Item> : null;

      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
          <img className="d-block h-400 w-100" src={this.props.Image1}/>
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block h-400 w-100" src={this.props.Image2} />
          </Carousel.Item>
          {Image3}
        </Carousel>
      );
    }

}
  export default ControlledCarousel;
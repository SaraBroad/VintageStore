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

    getProducts = () => {
      API.getProducts({
        q: this.state.q,
        productName: this.state.productName,
        price: this.state.price,
        size: this.state.size,
        description: this.state.description,
        inStock: this.state.inStock,
        Image1: this.state.imageOne,
        Image2: this.state.imageTwo,
        Image3: this.state.imageThree
      })
        .then(res =>
          this.setState({
            products: res.data,
            message: !res.data.length
              ? "No New Articles Found, Try a Different Query"
              : ""
          })
        )
        .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
      event.preventDefault();
      this.getProducts();
    };
  
  
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
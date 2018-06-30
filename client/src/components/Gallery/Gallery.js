import React from "react";
import "./Gallery.css";

const Gallery = props => (
<div>
  <img
    role="img"
    aria-label="click item"
    // onClick={() => props.handleClick(props.id)}
    src={props.image2}
  />
  <div>
    {props.name}
  </div>
</div> 
);

export default Gallery;


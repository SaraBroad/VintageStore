import React from "react";
import { Link } from "react-router-dom";
import "./Container.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Container = props => (
  <div className="storeTitle">
    <Link className="homelink" to="/home">
      <h2>Z A N A vintage</h2>
  
    </Link>
  </div>
);

export default Container;
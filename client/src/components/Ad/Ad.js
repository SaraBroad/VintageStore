import React from 'react';
import ad from './ad.png'; 
import "./Ad.css";


function Ad() {
  // Import result is the URL of your image
  return <img className="Ad" src={ad} alt="Ad of the moment" />;
}

export default Ad;
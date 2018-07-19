import React from 'react';
import "./about.css";
import Wrapper from '../components/Wrapper/Wrapper';

const About = () => (
           <div className="container dritaContainer">
           <container> <col-md-3> <img className="drita" alt="Drita" src="images/bw.jpg" align="left" padding-right="20px"/> </col-md-3> </container>
           <container> <col-md-8>
           <div className="aboutContent">
            <h1 className="about"><b>About Us</b></h1>
              <h4 className="definition">"<b>ZANA:</b> Balkan mythological creature. The zana is believed to be extremely courageous and beautiful; a formidable opponent who can bestow her protection on warriors. She is believed to have the power to petrify humans with a glance."</h4>
              
              <h4 className="paragraphs"><b>ZANA vintage</b> is a carefully curated collection of clothing. The concept for ZANA was built upon a love of green living and timeless fashion. At ZANA we believe in wearing pieces that make us feel like we are the heroines in the novel of our lives. The ideal ZANA woman knows what she wants. She believes in simplicity and elegance, and does her part to preserve this gorgeous earth we call our home. She believes in the power of her own individuality and chooses to sheath herself in clothing that highlights those qualities.</h4> 
              
              <h4 className="paragraphs">Here at ZANA we are fully committed to the principles of green living. With the motto of everything old becomes new again firmly in our psyche, we want to breathe the same life into the skirt that’s been sitting in your closet that you haven’t seen since the late 80’s. <a href="www.google.com">Click here</a> to find out more about our styling and closet rehab services.</h4>
               </div>
               </col-md-8>
               </container>
           </div>
           
       )
export default About;
import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import { Col, Container, Row, Footer } from 'mdbreact';
import { SocialIcon } from 'react-social-icons';
import Ad from "../Ad";

class FooterPage extends React.Component {
    render(){
        return(
          <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
              <Row className="text-center text-md-left mt-3 pb-3">
                  <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Z A N A vintage</h6>
                      <p>Carefully curated fashion collection dedicated to rediscovering, repurposing, and redefining classic style.</p>
                  </Col>
                  <hr className="w-100 clearfix d-md-none"/>
                  <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                      <p><Link to="/contact" className="nav-link">
            			        Contact Us!</Link></p>
                      <p><Link to="/privacy" className="nav-link">
             				      Privacy Policy </Link></p>
                      <p><Link to="/FAQs" className="nav-link">
             			        FAQs </Link></p>
                      <p><Link to="/About" className="nav-link">
             			        About Us </Link></p>
                  </Col>
                  <hr className="w-100 clearfix d-md-none"/>
                  <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                      <p>{Ad}</p>
                  </Col>
                  <hr className="w-100 clearfix d-md-none"/>
                  <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                      <p><i className="fa fa-home mr-3 mb-4 font-weight-bold"></i> Philadelphia, PA 19102, US</p>
                      <p><i className="fa fa-envelope mr-3"></i> ZANAvintage@gmail.com</p>
                  </Col>
              </Row>
              <hr/>
              <Row className="d-flex align-items-center">
                  <Col md="8" lg="8">
                      <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright <a href="https://www.ZANAvintage.com">Z A N A vintage</a></p>
                  </Col>
                  <Col md="4" lg="4" className="ml-lg-0">
                      <div className="text-center text-md-right">
                          <ul className="list-unstyled list-inline">
                              <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"><SocialIcon style={{ height: 25, width: 25 }}url="https://www.facebook.com/ZANA-vintage-2077392962519809/" /></i></a></li>
                              <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"><SocialIcon style={{ height: 25, width: 25 }}url="http://twitter.com/ZANAvintage" /></i></a></li>
                              <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-instagram"><SocialIcon  style={{ height: 25, width: 25 }}url="http://instagram.com/ZANAvintage" /></i></a></li>
                          </ul>
                      </div>
                  </Col>
              </Row>
          </Container>
      </Footer>
  );
}
}


export default FooterPage;


import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "./Search.css";
import {FormGroup, FormControl, Button, ButtonToolbar} from "react-bootstrap";

class Search extends React.Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }


 render() {
   return (
  

    <FormGroup form-inline>
        <div className="form-group">
        <FormControl type="text" placeholder="Search" 
        ref={input => this.search = input}
        onChange={this.handleInputChange} />
      <p>{this.state.query}</p>
      <ButtonToolbar>
      <Button bsSize="xsmall" bsStyle="xsmall" bsClass="color: black" className="searchbtn pull-right">Submit</Button>
      </ButtonToolbar>
      </div>
      </FormGroup>

   )
}
}

export default Search; 
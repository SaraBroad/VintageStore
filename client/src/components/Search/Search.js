import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "./Search.css";


class Search extends Component {
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
     <form className="form-inline my-2 my-lg-0">
       <input
         className="form-control mr-sm-2" type="search"
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
       {' '}
       <button type="submit" class="searchbtn">Search</button>
     </form>
   )
 }
}

export default Search; 
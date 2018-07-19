import React, {Component} from 'react';
import axios from 'axios';
import "./ContactCard.css";

class ContactCard extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Thank you for the message! We will get back to you within 24 hours!"); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
        <div className="contactContainer">  
            <div className="col-lg-5 col-md-5 col-sm-5">
                <img className="cart" alt="cart" src="images/cart.jpg" width="relative"/>
            </div> 
            <div className="col-lg-2 col-md-2 col-sm-2"></div>
            <div className="col-sm-5 offset-sm-5">
                <form id="contact-form contactMaster" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="contact form-group">
                        <label for="name">Name</label><br/>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="contact form-group">
                        <label for="exampleInputEmail1">Email address</label><br/>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="contact form-group">
                        <label for="message">Message</label><br/>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div><br/>
                    <button type="submit" className=" btn btn-primary">Submit</button>
                </form>
            </div>
        </div>    
        )
    }
}


export default ContactCard;


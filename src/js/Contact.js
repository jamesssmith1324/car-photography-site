import React, { Component } from "react";
import "../css/contact.css";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.name,
    });
  }
  render() {
    return (
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <hr />
        <div className="contactContainer">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              onChange={this.handleChange}
            />
            <textarea
              name="info"
              placeholder="Type Here..."
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
          <img
            alt="ContactImg"
            src="https://images.pexels.com/photos/103290/pexels-photo-103290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </div>
    );
  }
}

export default Contact;

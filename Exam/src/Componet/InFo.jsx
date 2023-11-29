import React, { Component } from "react";

class InFo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Umesh",
      age: 19,
      mobileNumber: "123456789",
      email: "umeshladumor0143@gmail.com",
    };
  }

  componentDidMount() {
    this.updateInfo();
  }

  updateInfo = () => {
    setTimeout(() => {
      this.setState({
        name: "Hitesh",
        age: 21,
        mobileNumber: "1234567890",
        email: "ladumor@gmail.com",
      });
    }, 5000);
  };

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <p>Age: {this.state.age}</p>
        <p>Mobile Number: {this.state.mobileNumber}</p>
        <p>Email: {this.state.email}</p>
      </div>
    );
  }
}

export default InFo;

import React, { Component } from "react";

class OnChange extends Component {
  constructor() {
    super();
    this.state = {
      name: "Umesh",
    };
  }
  render() {
    const changename = () => {
      this.setState({ name: this.state.name });
    };

    return (
      <div className="border border-primary w-75 my-5 m-auto text-center pt-2 ">
      
          <h3 className="border-bottom  border-secondary pt-1 pb-1">Name is :- {this.state.name}</h3>
          <input className="mb-5 mt-2"
            type="text"
            onChange={(i) => this.setState({ name: i.target.value })}
          />{" "}
      
      </div>
    );
  }
}

export default OnChange;

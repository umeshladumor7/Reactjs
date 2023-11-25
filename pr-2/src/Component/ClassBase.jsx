import React, { Component } from "react";

class ClassBase extends Component {
  render() {
    const add = () => {
      let p = 7;
      let q = 12;
      let r = p + q;
      return r;
    };
    const sub = () => {
      let p = 15;
      let q = 28;
      let r = p - q;
      return r;
    };
    const multiplication = () => {
      let p = 45;
      let q = 56;
      let r = p * q;
      return r;
    };

    const division = () => {
      let p = 78;
      let q = 7;
      let r = p / q;
      return r;
    };

    return (
      <div className="border border-primary w-75 my-5 m-auto text-center pt-2 ">
        <h2 className="border-bottom  border-secondary pt-1 pb-1"> CLASSBASE METHOD:</h2>
        <h3> Addtion is :- {add()}</h3>
        <h3> subtraction is :- {sub()}</h3>
        <h3> Multiplication is :- {multiplication()}</h3>
        <h3> Division is :- {division()}</h3> <br /> <br />
      </div>
    );
  }
}

export default ClassBase;

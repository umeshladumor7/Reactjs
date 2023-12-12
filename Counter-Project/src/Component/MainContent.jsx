// import React from "react";

// class MainContent extends React.Component {
//      constructor() {
//           super();
//           this.state = {
//                data: 5,
//           };
//      }
//      increment() {
//           this.setState({ data: this.state.data + 2 });
//      }
//      render() {
//           return (
//                <div className="App">
//                     <h1>{this.state.data}</h1>
//                     <button className="btn btn-primary" onClick={() => this.increment()}>Increment</button>
//                </div>
//           );
//      }
// }

// export default MainContent;

import React, { useState } from "react";

const MainContent = () => {
     const [count, setCount] = useState(5);
     const add = () => {
          setCount(count + 5);
     };
     return (
          <div className="border border-primary w-75 my-5 m-auto text-center pt-2 " >

               <h3 className="border-bottom  border-secondary pt-1 pb-1"> INCREMENT AND DECREMENT </h3>
               <h4> Count is : {count}</h4>
               <button className="btn btn-primary mx-4 mb-3 fw-bold" onClick={add}>
                    {" "}
                    Increment{" "}
               </button>
               <button class="btn btn-info mb-3 fw-bold" onClick={() => setCount(count - 5)}>
                    Decrement
               </button>{" "}
          </div>
     );
};

export default MainContent;

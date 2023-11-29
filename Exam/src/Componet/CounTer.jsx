import React from "react";
class CounTer extends React.Component {
     constructor() {
       super();
       this.state = {
         data: 5,
       };
     }
     increment() {
       this.setState({ data: this.state.data + 2 });
     }
     render() {
       return (
         <div className="App">
           <h1>{this.state.data}</h1>
           <button className="btn btn-primary" onClick={() => this.increment()}>Increment</button>
         </div>
       );
     }
   }
   
   export default CounTer;
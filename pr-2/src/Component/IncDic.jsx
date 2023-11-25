import React, { useState } from "react";

const IncDic = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="border border-primary w-75 my-5 m-auto text-center pt-2 " > 
     
        <h3 className="border-bottom  border-secondary pt-1 pb-1"> INCREMENT AND DECREMENT :-</h3>
        <h4> Count is : {count}</h4>
        <button className="btn btn-primary mx-4 mb-3" onClick={add}>
          {" "}
          Increment{" "}
        </button>
        <button class="btn btn-info mb-3" onClick={() => setCount(count - 1)}>
          Decrement
        </button>{" "}
    </div>
  );
};

export default IncDic;

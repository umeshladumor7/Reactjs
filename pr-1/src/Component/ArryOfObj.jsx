import React from "react";

// Q-9
const ArrayOfobject = () => {
  const student = [
    {
      Roll_No: 77,
      name: "Umesh",
      age: "22",
      gender: "male",
      address: "Amreli",
    },
  ];
  return (
    <div>
      <h2> Student Information </h2>

      {student.map((i) => {
        return (
          <div>
            <h3>Roll_No :- {i.Roll_No}</h3>
            <h3>Name :- {i.name}</h3>
            <h3>Age :- {i.age}</h3>
            <h3>Gender :- {i.gender}</h3>
            <h3>Address :- {i.address}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default ArrayOfobject;

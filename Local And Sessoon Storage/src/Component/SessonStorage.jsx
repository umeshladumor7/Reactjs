import React, { useState } from "react";

export const SessonStorage = () => {

  const [initialInfo] = useState({ fname: "", email: "", psw: "", add: "", mno: "" });
  const [array, setArray] = useState(JSON.parse(sessionStorage.getItem("Array")) || []);
  const [info, setInfo] = useState(initialInfo);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const Handlechange = (e) => {
    console.log(e.target);
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  const HandleSubmit = (e) => {
    if (editMode) {
      const updatedArray = [...array];
      updatedArray[editIndex] = info;
      setArray(updatedArray);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setArray([...array, info]);
    }

    sessionStorage.setItem("Array", JSON.stringify(array));
    setInfo(initialInfo);


    sessionStorage.setItem("Array", JSON.stringify([...array, info]));
    if (!info.fname || !info.email || !info.psw || !info.add || !info.mno) {
      alert("Please fill in all fields");
      return;
    }
  }

  const HandleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    sessionStorage.setItem("Array", JSON.stringify(newArray));
  }

  const HandleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setInfo(array[index]);
  }

  return (
    <>
      <div>
        <form action="" className="text-center mt-5 text-dark">
          <label htmlFor="fname" className="pe-3 fw-bold">Name : </label>
          <input type="text" name="fname" id="fname" placeholder="Enter Your Name" className="bg-info text-dark fw-bold" required value={info.fname} onChange={Handlechange} />
          <br /><br />
          <label htmlFor="email" className="pe-3 fw-bold">Email :</label>
          <input type="email" name="email" id="email" placeholder="Enter your Email Id" className="bg-info text-dark fw-bold" required value={info.email} onChange={Handlechange} />
          <br /><br />
          <label htmlFor="psw" className="pe-5 fw-bold ">Password :</label>
          <input type="password" name="psw" id="psw" placeholder=" Enter your Password" className="bg-info text-dark fw-bold" required value={info.psw} onChange={Handlechange} />
          <br /><br />
          <label htmlFor="add" className="pe-3 fw-bold" >Address : </label>
          <input type="text" id="add" name="add" required className="bg-info text-dark fw-bold" value={info.add} onChange={Handlechange} placeholder="Enter your Address" />
          <br /><br />
          <label htmlFor="mno" className="pe-3 fw-bold" >Mobile Number : </label>
          <input type="number" id="mno" name="mno" className="bg-info text-dark fw-bold" required value={info.mno} onChange={Handlechange} placeholder="Enter your Mobile" />
          <br /><br />
          <button type="submit" onClick={HandleSubmit} className="p-2 px-5 text-center bg-primary fw-bold text-dark border-0 rounded ">Submit</button>
        </form >
      </div>
      <table className="table table-bordered border-primary w-75 mt-5 ms-5">
        <thead>
          <th className="ps-5 border border-primary text-dark">Name</th>
          <th className="ps-5 border border-primary text-dark">Email</th>
          <th className="ps-5 border border-primary text-dark">Password</th>
          <th className="ps-5 border border-primary text-dark">Address</th>
          <th className="ps-5 border border-primary text-dark">Mobile Number</th>
          <th className="ps-5 border border-primary text-dark ">Action</th>
        </thead>
        <tbody >
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td className="bg-info text-dark fw-bold">{item.fname}</td>
                <td className="bg-info text-dark fw-bold">{item.email}</td>
                <td className="bg-info text-dark fw-bold">{item.psw}</td>
                <td className="bg-info text-dark fw-bold">{item.add}</td>
                <td className="bg-info text-dark fw-bold">{item.mno}</td>
                <td className="bg-info text-dark fw-bold"><button onClick={() => HandleDelete(index)} className="btn btn-danger fw-bold">Delete</button>
                  <button onClick={() => HandleEdit(index)} className="btn btn-primary ms-1 fw-bold">Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default SessonStorage;
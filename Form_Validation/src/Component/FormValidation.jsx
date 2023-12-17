import { useState, useEffect } from "react";

const FormValidation = () => {
     const [inputFields, setInputFields] = useState({
          name: "",
          email: "",
          password: "",
          age: null,
          address: ""
     });
     const [errors, setErrors] = useState({});
     const [submitting, setSubmitting] = useState(false);

     const validateData = (inputValues) => {
          let errors = {};
          if (inputValues.name.length < 10) {
               errors.name = "Name is too short";
          }
          if (inputValues.email.length < 15) {
               errors.email = "Email is too short";
          }
          if (inputValues.password.length < 5) {
               errors.password = "Password is too short";
          }
          if (!inputValues.age || inputValues.age < 18) {
               errors.age = "Minimum age is 18";
          }
          if (inputValues.address.length < 15) {
               errors.address = "address is too short";
          }
          return errors;
     };
     const handleChange = (e) => {
          setInputFields({ ...inputFields, [e.target.name]: e.target.value });
     };

     const handleSubmit = (event) => {
          event.preventDefault();
          setErrors(validateData(inputFields));
          setSubmitting(true);
     };

     const finishSubmit = () => {
          console.log(inputFields);
     };

     useEffect(() => {
          if (Object.keys(errors).length === 0 && submitting) {
               finishSubmit();
          }
     }, [errors]);

     return (
          <div className="App">
               {Object.keys(errors).length === 0 && submitting ? (
                    <span className="success">Successfully submitted ✓</span>
               ) : null}
               <form onSubmit={handleSubmit} className="" >
                    <table border="nono" align='center' className='mt-5 bg-info h-auto w-75' cellPadding={0} cellSpacing={0}>
                         <div className="mt-5" align="center">
                              <label style={{ width: 100 }} for="name" className="fw-bold">Name :- </label>
                              <input
                                   type="text"
                                   name="name"
                                   value={inputFields.name}
                                   onChange={handleChange}
                                   style={{ height: 40, width: 250, border: errors.name ? "1px solid red" : null }}
                              ></input><br /><br />
                              {errors.name ? (
                                   <p className="error text-danger fw-bold">Name should be at least 10 characters long</p>
                              ) : null}
                              <label style={{ width: 100 }} for="email" className="fw-bold">Email :-</label>
                              <input
                                   type="email"
                                   name="email"
                                   value={inputFields.email}
                                   onChange={handleChange}
                                   style={{ height: 40, width: 250, border: errors.email ? "1px solid red" : null }}
                              ></input><br /><br />
                              {errors.email ? (
                                   <p className="error text-danger fw-bold">Email should be at least 15 characters long</p>
                              ) : null}
                              <label style={{ width: 100 }} for="password" className="fw-bold">Password :-</label>
                              <input
                                   type="password"
                                   name="password"
                                   value={inputFields.password}
                                   onChange={handleChange}
                                   style={{ height: 40, width: 250, border: errors.password ? "1px solid red" : null }}
                              ></input><br /><br />
                              {errors.password ? (
                                   <p className="error text-danger fw-bold">
                                        Password should be at least 5 characters long
                                   </p>
                              ) : null}
                              <label style={{ width: 100 }} for="age" className="fw-bold">Age :-</label>
                              <input
                                   type="number"
                                   name="age"
                                   value={inputFields.age}
                                   onChange={handleChange}
                                   style={{ height: 40, width: 250, border: errors.age ? "1px solid red" : null }}
                              ></input><br /><br />
                              {errors.age ? <p className="error text-danger fw-bold">Minimum age is 18</p> : null}
                              <label style={{ width: 100 }} for="age" className="fw-bold">Address :-</label>
                              <textarea
                                   name="address"
                                   rows={2}
                                   cols={20}
                                   value={inputFields.address}
                                   onChange={handleChange}
                                   style={{ height: 40, width: 250, border: errors.address ? "1px solid red" : null }}
                              /><br /><br />
                              {errors.address ? (
                                   <p className="error text-danger fw-bold">address should be at least 15 characters long</p>
                              ) : null}
                              <button type="submit" className="fw-bold border-0 p-2 px-3 mb-5 bg-primary text-light px-5">Submit</button>

                         </div>

                    </table>
               </form>
          </div >
     );
}

export default FormValidation;
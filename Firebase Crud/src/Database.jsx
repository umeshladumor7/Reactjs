import React, { useState, useEffect } from 'react';
import { db } from "./Componets/firebase"
import { collection, addDoc, query, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

function Database(props) {
     const [Subject, setSubject] = useState("");
     const [AllUsers, setAllUsers] = useState([]);
     const [id, setid] = useState("")

     // inset//
     const handleSubmit = async (e) => {
          e.preventDefault();
          if (id !== "") {
               // update //
               await updateDoc(doc(db, "cetagory", id), { Subject: Subject })
               setSubject("");
               setid("");

          } else {
               // insert //
               if (Subject !== "") {
                    addDoc(collection(db, "cetagory"), {
                         Subject,
                         completed: false,
                    });

               }
          }

     }
     // display //
     useEffect(() => {
          const q = query(collection(db, "cetagory"));
          const unsub = onSnapshot(q, (querySnapshot) => {
               let todosArray = [];
               querySnapshot.forEach((doc) => {
                    todosArray.push({ ...doc.data(), id: doc.id });
               });
               setAllUsers(todosArray);
          });
          return () => unsub();
     }, []);
     // delete //
     const handleDelete = async (id) => {
          await deleteDoc(doc(db, "cetagory", id));
     }
     // edit //
     const handleEdit = async (id) => {
          let q = query(collection(db, "cetagory"))
          const unsub = onSnapshot(q, (querySnapshot) => {
               querySnapshot.forEach((doc) => {
                    if (doc.id == id) {
                         setSubject(doc.data().Subject);
                    }
               })

          })
          setid(id);
     }


     return (
          <>
               <div className='d-flex justify-content-center flex-column' >

                    <form onSubmit={handleSubmit} className='m-auto h-auto w-auto' >
                         <div className="input-container m-3">
                              <input type="text"
                                   placeholder='Enter your name'
                                   value={Subject}
                                   onChange={(e) => setSubject(e.target.value)}
                              />

                         </div>
                         <div className="btn-container">
                              <button className='btn btn-primary m-3 fw-bold'>Add Todo</button>
                         </div>
                    </form>
                    <table border={2}>
                         <thead >
                              <tr className='border border-primary text-center'>
                                   <th className='border border-primary px-2'>#</th>
                                   <th className='border border-primary px-2'>Id</th>
                                   <th className='border border-primary px-2'>subject</th>
                                   <th className='border border-primary px-2'>Status</th>
                                   <th className='border border-primary px-2'>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {AllUsers.map((i, index) => (
                                   <tr key={i.id} className='border border-primary text-center'>
                                        <td className='border border-primary text-center'>{index + 1}</td>
                                        <td className='border border-primary px-2'>{i.id}</td>
                                        <td className='border border-primary px-2'>{i.Subject}</td>
                                        <td className='border border-primary px-2'>{(i.completed) ? "Yes" : "No"}</td>
                                        <td ><button type='button' class="btn btn-outline-primary mx-2" onClick={() => handleEdit(i.id)}>EDIT</button><button type='button ' class="btn btn-outline-danger mx-2" onClick={() => handleDelete(i.id)}>Delete</button></td>

                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>

          </>
     );
}

export default Database;
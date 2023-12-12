import React from 'react'

export default function SideBar() {
     return (
          <div>
               <>

                    <button
                         className="btn btn-primary mt-5 ms-5"
                         type="button"
                         data-bs-toggle="offcanvas"
                         data-bs-target="#offcanvasExample"
                         aria-controls="offcanvasExample"
                    >   Menu
                    </button>
                    <div
                         className="offcanvas offcanvas-start"
                         tabIndex={-1}
                         id="offcanvasExample"
                         aria-labelledby="offcanvasExampleLabel"
                    >
                         <div className="offcanvas-header">
                              <h3 className="offcanvas-title " id="offcanvasExampleLabel">
                                   Volvo
                              </h3>
                              <button
                                   type="button"
                                   className="btn-close"
                                   data-bs-dismiss="offcanvas"
                                   aria-label="Close"
                              />
                         </div>
                         <div className="offcanvas-body">
                              <div className="dropdown mt-3 text-center pt-2">
                                   <a className="nav-link pt-2" href="#">
                                        Home
                                   </a>
                                   <a className="nav-link pt-2" href="#">
                                        About
                                   </a>
                                   <a className="nav-link pt-2" href="#">
                                        Blog
                                   </a>
                                   <a className="dropdown-item pt-2" href="#">
                                        Contact
                                   </a>
                              </div>
                         </div>
                    </div>
               </>

          </div>
     )
}

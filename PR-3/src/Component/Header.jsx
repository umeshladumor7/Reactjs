import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary sticky-top">
      <Navbar.Brand href="#home" className="col-5 text-light">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="#home" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#home" className="text-light">
            About
          </Nav.Link>
          <Nav.Link href="#home" className="text-light">
            Blog
          </Nav.Link>
          <Nav.Link href="#link" className="text-light">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

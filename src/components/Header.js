import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className="bg-light">
          <img
            alt=""
            src={Logo}
            height="40"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        {/* <Navbar.Brand href="#home">REACT-FPT</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav justify-content-center"
          className="justify-content-center"
        >
          <Nav className="" style={{ display: "flex", gap: 20 }}>
            <Link to={"Quiz"} style={{ color: "#fff" }}>
              Quiz
            </Link>
            <Link to={"Contact"} style={{ color: "#fff" }}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

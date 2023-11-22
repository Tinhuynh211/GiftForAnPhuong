import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function HeaderLogin() {
  return (
    <Navbar expand="lg" className="bg-primary padding">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav justify-content-center"
          className="justify-content-center"
        >
          <Nav className="" style={{ display: "flex", gap: 20 }}>
            <h4>Question For An Phuong</h4>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderLogin;

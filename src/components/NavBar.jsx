import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>REACTSHOP</Navbar.Brand>
        <Nav>
          <Nav style={{ paddingRight: "20px" }}>SHOP</Nav>
          <Nav style={{ paddingRight: "20px" }}>REVIEW</Nav>
          <Nav>ABOUT</Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

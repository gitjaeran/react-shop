import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand
          style={{ paddingRight: "20px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          REACTSHOP
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav
            style={{ paddingRight: "20px" }}
            onClick={() => {
              navigate("/shop");
            }}
            s
          >
            SHOP
          </Nav>
          <Nav
            style={{ paddingRight: "20px" }}
            onClick={() => {
              navigate("/review");
            }}
          >
            REVIEW
          </Nav>
          <Nav
            onClick={() => {
              navigate("/about");
            }}
          >
            ABOUT
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

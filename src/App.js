import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import FurnitureCard from "./components/FurnitureCard";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<div>about</div>} />
      </Routes>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">REACTSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#shop">SHOP</Nav.Link>
            <Nav.Link href="#review">REVIEW</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <FurnitureCard />

      {/* <Button variant="dark">Dark</Button> */}
    </div>
  );
}

export default App;

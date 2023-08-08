import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import FurnitureCard from "./components/FurnitureCard";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">REACTSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">SHOP</Nav.Link>
            <Nav.Link href="#features">REVIEW</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
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

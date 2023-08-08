import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import sofa from "./img/파로마가구-소파.jpg";
import bed from "./img/파로마가구-침대.jpg";
import makeup from "./img/파로마가구-화장대.jpg";

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

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={sofa} width="80%" alt="sofa" />
            <h4>(파로마 PICK) 올라 헤드레스트 코모도 패브릭 4인 소파</h4>
            <p>639,000원</p>
          </div>
          <div className="col-md-4">
            <img src={bed} width="80%" alt="bed" />
            <h4>러빗 호텔식 슬림 헤드 패브릭 침대 프레임Q</h4>
            <p>300,000원</p>
          </div>
          <div className="col-md-4">
            <img src={makeup} width="80%" alt="makeup" />
            <h4>파로마 로나 화이트 와이드 거울 수납 화장대 세트</h4>
            <p>541,500원</p>
          </div>
        </div>
      </div>
      {/* <Button variant="dark">Dark</Button> */}
    </div>
  );
}

export default App;

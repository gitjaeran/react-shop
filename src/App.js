import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./shared/Router";
import styled from "styled-components";

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 80px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  align-items: center;
`;

const Brand = styled.div`
  font-family: "Noto Sans";
  font-weight: 700;
  color: black;
  cursor: pointer;
  margin-right: 70px;
`;

const MenuBox = styled.div`
  display: flex;
  gap: 30px;
`;

const Menu = styled.div`
  padding: 5px;
  font-family: "Noto Sans";
  cursor: pointer;
  color: ${props => (props.clicked ? "black" : "gray")};

  &:hover {
    color: black;
    background-color: #f9f9f9;
    border-radius: 10%;
  }
`;

export { Layout, Container, Brand, MenuBox, Menu };

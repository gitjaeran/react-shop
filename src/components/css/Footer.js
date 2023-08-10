import styled from "styled-components";

const Layout = styled.div`
  height: 100px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;

  font-family: "Noto Sans";
  font-weight: 300;
  font-size: 13px;
  color: gray;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;

  :first-child {
    color: black;
  }
`;

const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  :first-child {
    color: black;
  }
`;

export { Layout, BrandContainer, DevContainer };

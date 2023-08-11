import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Noto Sans KR";
  font-family: "Noto Sans";
`;

const Alert = styled.div`
  width: 300px;
  background-color: #faebd7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 10px;
  font-style: italic;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: 1300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px 100px 0px;
`;

const ImgBox = styled.div`
  width: 600px;

  img {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  h4 {
    font-family: "Noto Sans KR";
    font-weight: 700;
  }

  button {
    font-family: "Noto Sans KR";
    font-weight: 300;
    border: none;
    border-radius: 8px;
    background-color: #d3d3d3;

    &:hover {
      background-color: gray;
      color: #ffffff;
    }
  }
`;

export { Layout, Alert, Container, Contents, ImgBox, InfoBox };

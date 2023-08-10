import styled from "styled-components";
import MainBgImg from "../../img/거실가구-파로마가구.jpg";

const Layout = styled.div`
  width: 100%;
  height: 800px;
  background-color: aqua;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const MainImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MainBgImg});
  background-size: cover;
  background-position: center;
`;

export { Layout, MainImg };

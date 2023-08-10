import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data";
import { useNavigate } from "react-router-dom";

function Test() {
  let [furniture] = useState(data);
  let navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <Layout>
        <h2>REACTSHOP FURNITURE</h2>
        <StyledSlider {...settings}>
          {furniture.map(data => {
            return (
              <Card
                key={data.id}
                onClick={() => {
                  navigate(`/detail/${data.id}`);
                }}
              >
                <img src={data.img} width="100%" alt="dataImg" />
                <div>
                  <CardTitle>{data.title}</CardTitle>
                  <p>{data.price}원</p>
                </div>
              </Card>
            );
          })}
        </StyledSlider>
      </Layout>
    </>
  );
}

export default Test;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 80px;
  color: #404040;

  h2 {
    font-family: "Noto Sans";
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

const StyledSlider = styled(Slider)`
  width: 1300px;
  display: flex;
`;

const Card = styled.div`
  width: 600px;
  height: 500px;
  padding: 10px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardTitle = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
`;

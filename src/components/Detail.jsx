import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import data from "../data";

function Detail() {
  let [furniture] = useState(data);
  let { id } = useParams();

  return (
    <Layout>
      <div>
        <div>
          <div>
            <img src={furniture[id].img} width="100%" alt="img" />
          </div>
          <div>
            <h4>{furniture[id].title}</h4>
            <p>{furniture[id].content}</p>
            <p>{furniture[id].price}원</p>
            <button>주문하기</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
const Layout = styled.div`
  width: 500px;
  height: 800px;
  background-color: beige;
`;

export default Detail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import * as Style from "./css/Detail";

function Detail() {
  /**useEffect
   * Side Effect: 함수의 핵심기능과 상관없는 부가기능
   * useEffect 코드는 HTML 렌더링 후에 동작한다.
   * - 어려운 연산
   * - 서버에서 데이터 가져오는 작업
   * - 타이머
   */

  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  });

  let [furniture] = useState(data);
  let { id } = useParams();

  return (
    <Style.Layout>
      <Style.Container>
        {alert ? <Style.Alert>3초이내 구매시 할인!</Style.Alert> : null}
        <Style.Contents>
          <Style.ImgBox>
            <img src={furniture[id].img} alt="img" />
          </Style.ImgBox>
          <Style.InfoBox>
            <h4>{furniture[id].title}</h4>
            <p>{furniture[id].content}</p>
            <p>{furniture[id].price}원</p>
            <button>주문하기</button>
          </Style.InfoBox>
        </Style.Contents>
      </Style.Container>
    </Style.Layout>
  );
}

export default Detail;

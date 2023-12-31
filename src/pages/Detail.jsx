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
   *
   * useEffect(()=>{}) 재랜더링마다 코드실행
   * useEffect(()=>{},[]) mount시 1회 코드실행
   * useEffect(()=>{return()=>{}}) useEffect 안의 코드 실행 전에 항상 실행
   * useEffect(()=>{return()=>{}},[]) unmount시 1회 코드실행
   * useEffect(()=>{},[a]) a 변경시에만 실행
   */

  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    //useEffect 동작 전 실행되는 코드(clean up function)
    //mount시 실행되지 않고 unmount시 실행됨
    return () => {
      //기존 동작 제거
      clearTimeout(timer);
    };
  }, []);

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

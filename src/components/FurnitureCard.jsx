import React from "react";
import data from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FurnitureCard() {
  let [furniture] = useState(data);
  let navigate = useNavigate();
  //navigate(1) => 한 페이지 앞으로, navigate(-1) => 이전 페이지로

  return (
    <div className="container">
      <div className="row">
        {furniture.map(data => {
          return (
            <div
              className="col-md-4"
              key={data.id}
              onClick={() => {
                navigate(`/detail/${data.id}`);
              }}
            >
              <img src={data.img} width="80%" alt="dataImg" />
              <h4>{data.title}</h4>
              <p>{data.price}원</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FurnitureCard;

//https://paroma.com/

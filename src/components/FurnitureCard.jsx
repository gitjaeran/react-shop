import React from "react";
import data from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./css/FurnitureCard";
import axios from "axios";

function FurnitureCard() {
  let [furniture] = useState(data);
  let navigate = useNavigate();
  //navigate(1) => 한 페이지 앞으로, navigate(-1) => 이전 페이지로

  return (
    <div
      className="container"
      style={{ marginTop: "80px", marginBottom: "80px" }}
    >
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
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then(result => {
              console.log(result.data);
            })
            .catch(() => {
              console.log("요청 실패");
            });
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default FurnitureCard;

//https://paroma.com/

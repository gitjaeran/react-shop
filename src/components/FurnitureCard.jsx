import React from "react";
import data from "../data";
import { useState } from "react";

function FurnitureCard() {
  let [furniture] = useState(data);

  return (
    <div className="container">
      <div className="row">
        {furniture.map(data => {
          return (
            <div className="col-md-4" key={data.id}>
              <img src={data.img} width="80%" alt="sofa" />
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

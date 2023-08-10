import React from "react";
import * as Style from "./css/MoreFurniture";
import { useNavigate } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

function MoreFurniture() {
  const navigate = useNavigate();
  return (
    <Style.Layout
      onClick={() => {
        navigate("/shop");
      }}
    >
      <div>더 많은 가구를 살펴보세요!</div>
      <button>
        <FiChevronsRight size="28px" />
      </button>
    </Style.Layout>
  );
}

export default MoreFurniture;

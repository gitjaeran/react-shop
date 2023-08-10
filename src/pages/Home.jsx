import React from "react";
import MainBg from "../components/MainBg";
import FurnitureCard from "../components/FurnitureCard";
import * as Style from "./css/Home";
import MoreFurniture from "../components/MoreFurniture";

function Home() {
  return (
    <Style.Layout>
      <MainBg />
      <FurnitureCard />
      <MoreFurniture />
    </Style.Layout>
  );
}

export default Home;

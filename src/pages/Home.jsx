import React from "react";
import MainBg from "../components/MainBg";
import FurnitureCard from "../components/FurnitureCard";
import * as Style from "./css/Home";
import MoreFurniture from "../components/MoreFurniture";
import Test from "../components/Test";

function Home() {
  return (
    <Style.Layout>
      <MainBg />
      {/* <FurnitureCard /> */}
      <Test />
      <MoreFurniture />
    </Style.Layout>
  );
}

export default Home;

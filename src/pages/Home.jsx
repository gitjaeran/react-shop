import React from "react";
import MainBg from "../components/MainBg";
import FurnitureCard from "../components/FurnitureCard";
import * as Style from "./css/Home";

function Home() {
  return (
    <Style.Layout>
      <MainBg />
      <FurnitureCard />
    </Style.Layout>
  );
}

export default Home;

import React from "react";
import NavBar from "./NavBar";
import MainBg from "./MainBg";
import Footer from "./Footer";
import FurnitureCard from "./FurnitureCard";

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <MainBg />
      <FurnitureCard />
      {/* <div>{children}</div> */}
      <Footer />
    </div>
  );
}

export default Layout;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./css/NavBar";

// 일정 이하로 내려가면 navbar 어두운색으로 보여주기
function NavBar() {
  const [clickedMenuIndex, setClickedMenu] = useState(null);
  let navigate = useNavigate();

  const clickedCheckHandler = index => {
    setClickedMenu(index === clickedMenuIndex ? null : index);
  };

  return (
    <Style.Layout>
      <Style.Container>
        <Style.Brand
          onClick={() => {
            navigate("/");
            clickedCheckHandler(null);
          }}
        >
          REACTSHOP
        </Style.Brand>
        <Style.MenuBox>
          <Style.Menu
            clicked={clickedMenuIndex === 0}
            onClick={() => {
              navigate("/shop");
              clickedCheckHandler(0);
            }}
            s
          >
            SHOP
          </Style.Menu>
          <Style.Menu
            clicked={clickedMenuIndex === 1}
            onClick={() => {
              navigate("/review");
              clickedCheckHandler(1);
            }}
          >
            REVIEW
          </Style.Menu>
          <Style.Menu
            clicked={clickedMenuIndex === 2}
            onClick={() => {
              navigate("/about");
              clickedCheckHandler(2);
            }}
          >
            ABOUT
          </Style.Menu>
        </Style.MenuBox>
      </Style.Container>
    </Style.Layout>
  );
}

export default NavBar;

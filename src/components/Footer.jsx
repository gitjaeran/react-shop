import React from "react";
import * as Style from "./css/Footer";

function Footer() {
  return (
    <Style.Layout>
      <Style.BrandContainer>
        <div>Infomation</div>
        <div>Project Name: REACTSHOP</div>
        <div>Original: https://paroma.com/</div>
      </Style.BrandContainer>
      <Style.DevContainer>
        <div>Developer</div>
        <div>devjaeran@gmail.com</div>
        <div>@gitjaeran</div>
      </Style.DevContainer>
    </Style.Layout>
  );
}

export default Footer;

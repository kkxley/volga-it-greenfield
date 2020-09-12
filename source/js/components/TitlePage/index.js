import React from "react";
import * as Styled from "./StyledTitlePage";

export default function TitlePage({ activePage }) {
  console.log(activePage);

  return (
    <Styled.TitlePage>
      <Styled.TitlePageBackground
        activePage={activePage}
        bg="/static/images/01_Greenfield_Главная_Design_1920_ain.jpeg"
      />
      <Styled.TitlePageParallaxLayout bg="/static/images/01_1_foggy.png" />
      <Styled.TitlePageParallaxLayout bg="/static/images/01_foggy.png" />
      <Styled.TitlePageIco>
        <img src="/static/images/logo_white.svg" />
      </Styled.TitlePageIco>
      <Styled.TitlePageBody>
        <h1>обретая&#13;гармонию.&#13;обретая&#13;себя.</h1>
        <span>Погрузитесь в философию Greenfield</span>
      </Styled.TitlePageBody>
    </Styled.TitlePage>
  );
}

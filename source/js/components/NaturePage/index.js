import React from "react";
import * as Styled from "./StyledNaturePage";

export default function NaturePage() {
  return (
    <Styled.NaturePagerapper>
      <Styled.NaturePageIco>
        <img src="/static/images/logo_green.svg" />
      </Styled.NaturePageIco>
      <Styled.NaturePageRightImage>
        <figure>
          <img src="/static/images/03_Greenfield_Design_2560_1a_гармония.jpeg" />
        </figure>
      </Styled.NaturePageRightImage>
      <Styled.NaturePageBody>
        <Styled.NaturePageBodyLeftImage>
          <img src="/static/images/Гринфилд_визуал_лето.jpeg" />
        </Styled.NaturePageBodyLeftImage>
        <Styled.NaturePageBodyText>
          <h2>Красота вечно изменчивой природы.</h2>
          <p>
            Неполвластные мимолетному дыханию популярностти, сорта чая обладают
            той высокой мерой вкуса, которая рождается из сочетания традиций,
            совершенства обработки чайных листьев и красоты вечно изменчивой
            природы.
          </p>
          <h4>003</h4>
        </Styled.NaturePageBodyText>
      </Styled.NaturePageBody>
    </Styled.NaturePagerapper>
  );
}

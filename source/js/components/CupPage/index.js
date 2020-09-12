import React from "react";
import * as Styled from "./StyledCupPage";

export default function CupPage() {
  return (
    <Styled.CupPageWrapper>
      <Styled.CupPageIco>
        <img src="/static/images/logo_green.svg" />
      </Styled.CupPageIco>
      <Styled.CupPageBody>
        <Styled.CupPageBodyLeftImage>
          <figure>
            <img src="/static/images/02_1_Greenfield_Design_2560_1a_гармония.jpeg" />
          </figure>
        </Styled.CupPageBodyLeftImage>
        <Styled.CupPageBodyText>
          <h2>Ускользающее мгновение, воплощенное в чашечке чая...</h2>
          <p>
            Среди бесконечного разнообразия чая есть сорта, имеющие особое
            значение. И только они таят особый магнетизм, который заставляет
            следовать совету Оскара Уайльда, считавшего, что существует лишь
            единственный способ противостоять искушению - поддаться ему.
          </p>
          <h4>002</h4>
        </Styled.CupPageBodyText>
      </Styled.CupPageBody>
      <Styled.RightImage>
        <figure>
          <img src="/static/images/02_2_Greenfield_Design_2560_1a_гармония.jpeg" />
        </figure>
      </Styled.RightImage>
      <Styled.CupPageleaf
        img="/static/images/leaf_3.png"
        width="191px"
        height="222px"
        top="25px"
        left="calc(30% - 62px)"
        rotate="-10.29deg"
      />
      <Styled.CupPageleaf
        img="/static/images/leaf_2.png"
        width="185.04px"
        height="83.79px"
        top="841.39px"
        left="976px"
        rotate="-13.56deg"
      />
      <Styled.CupPageleaf
        img="/static/images/leaf_4.png"
        width="54.18px"
        height="111.54px"
        top="567.66px"
        left="1627.51px"
        rotate="-104.44deg"
      />
    </Styled.CupPageWrapper>
  );
}

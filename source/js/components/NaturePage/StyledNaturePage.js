import styled from "styled-components";

export const NaturePagerapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const NaturePageIco = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 26px;
`;

export const NaturePageBody = styled.div`
  display: flex;
  flex: 1;
`;

export const NaturePageBodyLeftImage = styled.div`
  display: flex;
  width: 33.5%;
  position: relative;
  overflow: hidden;

  & img {
    position: absolute;
    top: 0%;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translateX(-50%);
  }
`;

export const NaturePageBodyText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 98px;
  padding-bottom: 112px;
  padding-right: 350px;

  & h2 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    color: #393838;
    margin-bottom: 45px;
  }

  & p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #393838;
    letter-spacing: -0.2px;
    margin-bottom: 50px;
  }

  & h4 {
    font-family: Petersburg;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 45px;
    color: #ccdacf;
  }
`;

export const NaturePageRightImage = styled.div`
  position: absolute;
  width: 31%;
  top: 0;
  right: 126px;

  & figure {
    width: 100%;
    height: 0;
    padding-top: 63%;
    overflow: hidden;
    position: relative;

    & img {
      position: absolute;
      top: 0;
      left: 50%;
      width: auto;
      height: 100%;
      transform: translateX(-50%);
    }
  }
`;

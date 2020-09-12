import styled from "styled-components";

export const CupPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const CupPageleaf = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left || "auto"};
  bottom: ${props => props.right || "auto"};
  width: ${props => props.width};
  height: ${props => props.height};
  background: url(${props => props.img});
  background-size: cover;
  transform: rotate(${props => props.rotate});
`;

export const CupPageBody = styled.div`
  flex: 1;
  padding: 25px 126px;
  display: flex;
`;

export const CupPageBodyText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;

  padding-left: 98px;
  padding-top: 112px;

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
    padding-right: 100px;
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

export const CupPageBodyLeftImage = styled.div`
  width: 31%;
  position: relative;
  overflow: hidden;
  height: fit-content;

  & figure {
    height: 0;
    width: 100%;
    padding-top: 132%;

    & img {
      position: absolute;
      top: -40%;
      left: 50%;
      transform: translateX(-47%);
      width: 115%;
      height: auto;
    }
  }
`;

export const RightImage = styled.div`
  position: absolute;
  right: 50px;
  bottom: 0px;
  width: 31%;
  overflow: hidden;

  & figure {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 54%;

    & img {
      position: absolute;
      top: -5%;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
`;

export const CupPageIco = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 26px;
`;

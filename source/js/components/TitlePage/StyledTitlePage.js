import styled from "styled-components";

export const TitlePage = styled.div`
    background-image: url("${props => props.bg}");
    background-position: center center;
    width: 100%;
    height: 100%;
    background-size: cover;
`;

export const TitlePageParallaxLayout = styled.div`
    background-image: url("${props => props.bg}");
    background-position: center center;
    background-size: auto 100%;
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
`;

export const TitlePageIco = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const TitlePageBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & h1 {
    font-family: Playfair Display;
    padding-left: 10%;
    width: min-content;
    color: #fffefe;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 100px;
    text-transform: uppercase;
  }

  & span {
    font-family: Ubuntu;
    padding-left: 10%;
    color: #fffefe;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
  }
`;

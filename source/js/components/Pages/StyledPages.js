import styled from "styled-components";

export const PagesWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  transition: transform 2s linear; /* ease */
  transform: translateX(${props => -props.activePage * 100}%);
`;

export const Page = styled.section`
  position: absolute;
  top: 0;
  left: ${props => props.num * 100}%;
  width: 100%;
  height: 100%;
`;

import styled from "styled-components";

export const Navigator = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavigatorButton = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";

export const VideoPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const VideoPageIco = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 26px;
`;

export const VideoPageBody = styled.div`
  flex: 1;
  margin: 126px;
  margin-top: 50px;
  margin-bottom: 98px;
  position: relative;
  overflow: hidden;

  & img {
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    & + img {
      height: auto;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

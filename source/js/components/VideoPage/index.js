import React from "react";
import * as Styled from "./StyledVideoPage";

export default function VideoPage() {
  return (
    <Styled.VideoPageWrapper>
      <Styled.VideoPageIco>
        <img src="/static/images/logo_green.svg" />
      </Styled.VideoPageIco>
      <Styled.VideoPageBody>
        <img src="/static/images/04_Greenfield_Design_2560_1a_гармония.jpeg" />
        <img src="/static/images/icon_play.svg" />
      </Styled.VideoPageBody>
    </Styled.VideoPageWrapper>
  );
}

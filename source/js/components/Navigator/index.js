import React from "react";
import * as Styled from "./StyledNavigator";

export default function Navigator() {
  return (
    <Styled.Navigator>
      <Styled.NavigatorButton>
        <img src="/static/images/icon_menu.svg" />
      </Styled.NavigatorButton>
      <Styled.NavigatorButton>
        <img src="/static/images/icon_en.svg" />
      </Styled.NavigatorButton>
    </Styled.Navigator>
  );
}

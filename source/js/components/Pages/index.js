import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./StyledPages";

import Navigator from "../Navigator";
import TitlePage from "../TitlePage";

export default function Pages() {
  const pages = [<TitlePage />, "Page 2", "Page 3", "Page 4"];
  const [activePage, setActivePage] = useState(0);
  const isAnimation = useRef(false);

  function handleKeyPress(e) {
    console.log(e);
  }

  useEffect(() => {
    setTimeout(() => (isAnimation.current = false), 1050);
  }, [activePage]);

  function handleWheel(e) {
    if (isAnimation.current) return;
    isAnimation.current = true;

    e.persist();
    if (e.deltaY < 0)
      setActivePage(activePage =>
        activePage - 1 < 0 ? pages.length - 1 : activePage - 1
      );
    else
      setActivePage(activePage =>
        activePage + 1 >= pages.length ? 0 : activePage + 1
      );
  }

  return (
    <>
      <Navigator />
      <Styled.PagesWrapper activePage={activePage} onWheel={handleWheel}>
        {pages.map((page, i) => (
          <Styled.Page key={i} num={i}>
            {page}
          </Styled.Page>
        ))}
      </Styled.PagesWrapper>
    </>
  );
}

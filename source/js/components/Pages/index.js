import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./StyledPages";

import Navigator from "../Navigator";
import TitlePage from "../TitlePage";
import CupPage from "../CupPage";
import NaturePage from "../NaturePage";
import VideoPage from "../VideoPage";

export default function Pages() {
  const [activePage, setActivePage] = useState(0);
  console.log(activePage === 1);

  const pages = [
    <TitlePage activePage={activePage} />,
    <CupPage />,
    <NaturePage />,
    <VideoPage />
  ];
  const isAnimation = useRef(false);

  function handleKeyPress(e) {
    console.log(e);
  }

  useEffect(() => {
    setTimeout(() => (isAnimation.current = false), 2050);
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

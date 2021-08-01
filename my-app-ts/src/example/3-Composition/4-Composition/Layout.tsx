import React, { useEffect } from "react";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

import { LayoutProps } from "./index.d";

function Layout(props: LayoutProps) {
  let { children, showTopBar, showBottomBar } = props;
  console.log(`children:`, children);

  useEffect(() => {
    let { title = "默认页" } = props;
    document.title = title;
    return () => {};
  }, [props]);

  return (
    <div>
      {showTopBar && <TopBar></TopBar>}

      {children.content}
      <h2>{children.text}</h2>
      <button onClick={children.btnClick}>点击</button>

      {showBottomBar && <BottomBar />}
    </div>
  );
}

export default Layout;

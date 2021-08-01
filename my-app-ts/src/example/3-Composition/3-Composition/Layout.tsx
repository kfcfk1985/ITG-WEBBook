import React, { Component } from "react";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

import { LayoutProps } from "./index.d";

class Layout extends Component {
  public props!: LayoutProps;

  componentDidMount() {
    let { title = "默认页" } = this.props;
    document.title = title;
  }

  render() {
    let { children, showTopBar, showBottomBar } = this.props;
    console.log(`children:`, children);
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
}

export default Layout;

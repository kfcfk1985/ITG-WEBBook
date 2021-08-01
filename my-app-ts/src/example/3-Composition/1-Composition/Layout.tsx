import React, { Component } from "react";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

interface Props {
  showTopBar: boolean;
  showBottomBar: boolean;
  title: string;

  children?: React.ReactNode; //! children 要这样定义
}

class Layout extends Component {
  public props!: Props;

  componentDidMount() {
    let { title = "默认页" } = this.props;
    document.title = title;
  }

  render() {
    //! this.props.children 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成(即：指父组件包裹的内容)
    let { children, showTopBar, showBottomBar } = this.props;
    console.log(`children:`, children);
    return (
      <div>
        {showTopBar && <TopBar></TopBar>}
        {children} {/* //! 相当于vue中的默认插槽 */}
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}

export default Layout;

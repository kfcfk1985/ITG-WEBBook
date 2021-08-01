//创建一个 Layout组件（相当于可以实现vue中的 slot），可以传递 showTopBar，showBottomBar，title参数。

import React, { Component } from "react";
import Layout from "./Layout";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout showTopBar={false} showBottomBar={true} title="首页">
          <p>HomaPage</p>
        </Layout>
      </div>
    );
  }
}

export default HomePage;

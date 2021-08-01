//创建一个Layout组件，可以传递一个对象进去，并在layout组件中解析。

import React, { Component } from "react";
import Layout from "./Layout";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout showTopBar={false} showBottomBar={true} title="首页">
          {{
            content: <p>HomaPage</p>,
            text: "this is  text",
            btnClick: () => {
              console.log("button click");
            },
          }}
        </Layout>
      </div>
    );
  }
}
export default HomePage;

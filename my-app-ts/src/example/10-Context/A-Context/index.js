import React, { Component } from "react";
import Child from "./child";
import { ThemeProvider } from "./context";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red",
      },
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        {/* //!供应商供货，被< ThemeProvider >包裹的作用域都可以访问到！ */}
        <ThemeProvider value={theme}>
          <Child />
        </ThemeProvider>
      </div>
    );
  }
}

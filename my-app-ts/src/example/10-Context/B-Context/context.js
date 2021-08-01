import React from "react";

//! 创建context: 农民种菜
export const ThemeContext = React.createContext({ themeColor: "pink" }); //!设置默认值；若祖父组件没有传递值，就拿到默认值

//! 接收者: 批发商批发菜
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

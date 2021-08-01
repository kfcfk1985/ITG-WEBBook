import React, { useState } from "react";
import Child from "./child";
import { ThemeProvider, UserProvider } from "./context";
export default function Index() {
  const [theme, setTheme] = useState({
    themeColor: "red",
  });
  const [user, setUser] = useState({
    name: "xiaoming",
  });

  const changeColor = () => {
    const { themeColor } = theme;
    setTheme({
      themeColor: themeColor === "red" ? "green" : "red",
    });
  };

  return (
    <div>
      <button onClick={changeColor}>change color</button>

      <ThemeProvider value={theme}>
        <UserProvider value={user}>
          <Child />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

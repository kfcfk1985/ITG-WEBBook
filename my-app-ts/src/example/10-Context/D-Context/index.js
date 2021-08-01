import React, { createContext, useState, useContext } from "react";

const themes = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};

const ThemeContext = createContext();

const Grandchild = () => {
  //!useContext的使用：真的很优雅
  const themeStyle = useContext(ThemeContext);
  return <div style={themeStyle}>Grandchild</div>;
};
const Child = () => {
  return (
    <div>
      <Grandchild />
    </div>
  );
};

function Index() {
  console.log("知识点：");
  console.log("1.useContext的使用");

  const [theme, setTheme] = useState("dark");
  return (
    <div>
      {/* //!这种写法更优雅 */}
      <ThemeContext.Provider value={themes[theme]}>
        <button
          type=""
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          changeColor
        </button>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
}

export default Index;

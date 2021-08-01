import React from "react";

import { ThemeConsumer } from "./context";

function Child() {
  return (
    <div>
      <ThemeConsumer>
        {(value) => {
          const { themeColor } = value;
          return <div>{themeColor}</div>;
        }}
      </ThemeConsumer>
    </div>
  );
}

export default Child;

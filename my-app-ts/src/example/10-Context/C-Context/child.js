import React from "react";
import { ThemeConsumer, UserConsumer } from "./context";

export default function Child() {
  return (
    <div>
      <ThemeConsumer>
        {(theme) => (
          <UserConsumer>
            {(user) => {
              const { name } = user;
              const { themeColor } = theme;
              return (
                <div>
                  <p>{name}</p>
                  <p>{themeColor}</p>
                </div>
              );
            }}
          </UserConsumer>
        )}
      </ThemeConsumer>
    </div>
  );
}

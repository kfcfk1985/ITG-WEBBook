import React from "react";

export const ThemeContext = React.createContext({ themeColor: "pink" });
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export const UserContext = React.createContext({ user: "tony" });
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

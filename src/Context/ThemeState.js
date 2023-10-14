import React, { useReducer } from "react";
import ThemeContext from "./ThemeContext";

function themeReducer(state, action) {
  if (action.type === "SWITCH_THEME") {
    return state === "light" ? "dark" : "light";
  }
}

export default function ThemeState({ children }) {
  const [state, dispatch] = useReducer(themeReducer, "light");
  return (
    <div>
      <ThemeContext.Provider value={{ state, dispatch }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

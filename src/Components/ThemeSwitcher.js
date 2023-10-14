import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function ThemeSwitcher() {
  const { dispatch } = useContext(ThemeContext);
  function switchHandler() {
    dispatch({ type: "SWITCH_THEME" });
  }
  return (
    <div>
      <button onClick={switchHandler}>Switch The Theme </button>
    </div>
  );
}

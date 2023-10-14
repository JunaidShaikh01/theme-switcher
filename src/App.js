import { useContext } from "react";
import "./App.css";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const { state } = useContext(ThemeContext);

  return (
    <div className={`App ${state === "dark" ? "dark" : "light"}`}>
      <ThemeSwitcher />
    </div>
  );
}

export default App;

import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const DarkModeContextProvider = createContext();

function DarkModeContext({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  function onToggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContextProvider.Provider
      value={{ isDarkMode, setIsDarkMode, onToggleDarkMode }}
    >
      {children}
    </DarkModeContextProvider.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContextProvider);

  if (context === undefined)
    throw new Error("context is used outside its parent");

  return context;
}

export default DarkModeContext;

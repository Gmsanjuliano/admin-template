import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>("");

  function changeTheme() {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  // useEffect(() => {
  //   const saveTheme = localStorage.getItem("theme");
  //   setTheme(saveTheme);
  // }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

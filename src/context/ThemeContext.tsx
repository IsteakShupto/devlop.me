import { createContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = (themeInput: string) => {
    setTheme(themeInput);
    localStorage.setItem("theme", themeInput);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

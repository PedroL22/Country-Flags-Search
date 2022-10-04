import React, {
  useContext, createContext, useState, useEffect,
} from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const root = window.document.documentElement;

    const removeTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(removeTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

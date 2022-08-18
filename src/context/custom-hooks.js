import { useEffect, useRef, useContext } from "react";
import { ThemeContext, themes } from "./theme-context";

export const useThemeChange = (themeName, options) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const containerRef = useRef(null);

  const callbackFunction = (entries) => {
    if (entries[0].isIntersecting) {
      console.log(themeName);
      setTheme(themes[theme.isDark ? "dark" : "light"][themeName]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef, options]);

  return containerRef;
};

import { useEffect, useRef, useContext } from "react";
import { ThemeContext, themes } from "./theme-context";

export const useThemeChange = (themeName, threshold = 1.0) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const containerRef = useRef(null);
  const options = { threshold: threshold };

  const callbackFunction = (entries) => {
    if (entries[0].isIntersecting) {
      const newTheme = themes[theme.isDark ? "dark" : "light"][themeName];

      // update color variables
      document.documentElement.style.setProperty(
        "--root-background-color",
        newTheme.background
      );
      document.documentElement.style.setProperty(
        "--root-scrollbar-color",
        newTheme.scrollbar + " " + newTheme.background
      );

      // update meta tags
      document
        .querySelector("meta[name='theme-color']")
        .setAttribute("content", newTheme.background);

      // update state
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef, options, theme]);

  return containerRef;
};

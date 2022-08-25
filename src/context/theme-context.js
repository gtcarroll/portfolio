import { createContext } from "react";
export const colors = {
  pop1: "rgb(255, 161, 152)", // #ffa198
  pop2: "rgb(152, 224, 255)", // #98e0ff
  pop3: "rgb(255, 241, 152)", // #fff198
};
export const themes = {
  dark: {
    default: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: colors.pop3,
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      hover: "rgba(242, 238, 232, 0.4)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    recipes: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: colors.pop1,
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      hover: "rgba(242, 238, 232, 0.4)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    sudokoo: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: colors.pop2,
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      hover: "rgba(242, 238, 232, 0.4)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    uzumaki: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: colors.pop3,
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      hover: "rgba(242, 238, 232, 0.4)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
  },
  light: {
    default: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: colors.pop3,
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      hover: "rgba(9, 14, 27, 0.1)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    recipes: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: colors.pop1,
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      hover: "rgba(9, 14, 27, 0.1)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    sudokoo: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: colors.pop2,
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      hover: "rgba(9, 14, 27, 0.1)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    uzumaki: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: colors.pop3,
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      hover: "rgba(9, 14, 27, 0.1)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
  },
};

export const ThemeContext = createContext({
  theme: themes.dark.default,
  setTheme: () => {},
});

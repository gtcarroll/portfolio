import { createContext } from "react";
export const pallete = {
  dark: [
    "rgb(2, 43, 58)", // #022b3a
    "rgb(112, 79, 156)", // #704f9c
    "rgb(33, 129, 151)", // #218197
  ],
  light: [
    "rgb(194, 255, 248)", // #c2fff8
    "rgb(227, 130, 248)", // #e382f8
    "rgb(87, 210, 194)", // #57d2c2
  ],
};
export const themes = {
  light: {
    default: {
      isDark: false,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.light[0],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    recipes: {
      isDark: false,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.light[0],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    sudokoo: {
      isDark: false,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.light[1],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    uzumaki: {
      isDark: false,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.light[2],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
  },
  dark: {
    default: {
      isDark: true,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.dark[0],
      overlay: "rgba(9, 14, 27, 0.2)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    recipes: {
      isDark: true,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.dark[0],
      overlay: "rgba(9, 14, 27, 0.2)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    sudokoo: {
      isDark: true,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.dark[1],
      overlay: "rgba(9, 14, 27, 0.2)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    uzumaki: {
      isDark: true,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.dark[2],
      overlay: "rgba(9, 14, 27, 0.2)", // #090e1b
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

import { createContext } from "react";
export const pallete = {
  dark: [
    "rgb(255, 241, 152)", // #fff198
    "rgb(255, 161, 152)", // #ffa198
    "rgb(152, 224, 255)", // #98e0ff
  ],
  light: [
    "rgb(2, 43, 58)", // # sienna
    "rgb(112, 79, 156)", // #73628a
    "rgb(33, 129, 151)", // # green
    "rgb(84, 131, 151)", // # green
  ],
};
export const themes = {
  dark: {
    default: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.dark[0],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    recipes: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.dark[0],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    sudokoo: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.dark[2],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
      scrollbar: "rgba(0, 0, 0, 0.3)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
    },
    uzumaki: {
      isDark: true,

      foreground: "rgb(0, 0, 0)", // #000
      background: pallete.dark[1],
      overlay: "rgba(242, 238, 232, 0.2)", // #f2eee8
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
      background: pallete.light[0],
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    recipes: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.light[0],
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    sudokoo: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.light[2],
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      scrollbar: "rgba(255, 255, 255, 0.3)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
    },
    uzumaki: {
      isDark: false,

      foreground: "rgb(255, 255, 255)", // #fff
      background: pallete.light[1],
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
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

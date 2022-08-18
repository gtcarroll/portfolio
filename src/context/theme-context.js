import { createContext } from "react";
export const themes = {
  dark: {
    default: {
      isDark: true,
      foreground: "rgb(201, 209, 217)", // #c9d1d9
      background: "rgb(13, 17, 23)", // #0d1117
      overlay: "rgba(242, 238, 232, 0.075)", // #f2eee8
      overlaySolid: "rgb(30,34,39)", // #1e2227
      scrollbar: "rgb(82, 83, 86)", // #525356

      accent1: "rgb(252, 136, 155)", // #fc889b
      accent2: "rgb(252, 200, 115)", // #fcc873
      accent3: "rgb(188, 201, 120)", // #bcc978
      primary: "rgb(188, 201, 120)", // #bcc978
      primaryLight: "rgb(66, 72, 52)", // #424834
    },
    recipes: {
      isDark: true,
      foreground: "rgb(201, 209, 217)", // #c9d1d9
      background: "rgb(13, 17, 23)", // #0d1117
      overlay: "rgba(242, 238, 232, 0.075)", // #f2eee8
      overlaySolid: "rgb(30,34,39)", // #1e2227
      scrollbar: "rgb(82, 83, 86)", // #525356

      accent1: "rgb(252, 136, 155)", // #fc889b
      accent2: "rgb(252, 200, 115)", // #fcc873
      accent3: "rgb(188, 201, 120)", // #bcc978
      primary: "rgb(188, 201, 120)", // #bcc978
      primaryLight: "rgb(66, 72, 52)", // #424834
    },
    sudokoo: {
      isDark: true,
      foreground: "rgb(231, 231, 231)", // #e7e7e7
      background: "rgb(8, 8, 8)", // #080808
      overlay: "rgb(32, 32, 32)", // #202020
      overlaySolid: "rgb(32, 32, 32)", // #202020
      scrollbar: "rgb(49, 49, 49)", // #313131

      accent1: "rgb(182, 231, 166)", // #b6e7a6
      accent2: "rgb(97, 219, 231)", // #61dbe7
      accent3: "rgb(231, 153, 231)", // #e799e7
      primary: "rgb(97, 219, 231)", // #61dbe7
      primaryLight: "rgb(30,61,64)", //#1e3d40
    },
    uzumaki: {
      isDark: true,
      foreground: "rgb(255, 255, 255)", // #fff
      background: "rgb(0, 0, 0)", // #000
      overlay: "rgb(32, 32, 32)", // #202020
      overlaySolid: "rgb(32, 32, 32)", // #202020
      scrollbar: "rgb(255, 255, 255)", // #fff

      accent1: "rgb(255, 255, 255)", // #fff
      accent2: "rgb(255, 255, 255)", // #fff
      accent3: "rgb(255, 255, 255)", // #fff
      primary: "rgb(255, 255, 255)", // #fff
      primaryLight: "rgb(127, 50, 50)", // #7f3232
    },
  },
  light: {
    default: {
      isDark: false,
      foreground: "rgb(54, 46, 38)", // #362e26
      background: "rgb(246, 241, 228)", // #f6f1e4
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      overlaySolid: "rgb(234,230,218)", // #eae6da
      scrollbar: "rgb(175, 173, 168)", // #afada8

      accent1: "rgb(173, 12, 155)", // #ad0c9b
      accent2: "rgb(13, 67, 191)", // #0d43bf
      accent3: "rgb(14, 122, 124)", // #0e7a7c
      primary: "rgb(14, 122, 124)", // #0e7a7c
      primaryLight: "rgb(176, 205, 197)", // #b0cdc5
    },
    recipes: {
      isDark: false,
      foreground: "rgb(54, 46, 38)", // #362e26
      background: "rgb(246, 241, 228)", // #f6f1e4
      overlay: "rgba(9, 14, 27, 0.05)", // #090e1b
      overlaySolid: "rgb(234,230,218)", // #eae6da
      scrollbar: "rgb(175, 173, 168)", // #afada8

      accent1: "rgb(173, 12, 155)", // #ad0c9b
      accent2: "rgb(13, 67, 191)", // #0d43bf
      accent3: "rgb(14, 122, 124)", // #0e7a7c
      primary: "rgb(14, 122, 124)", // #0e7a7c
      primaryLight: "rgb(176, 205, 197)", // #b0cdc5
    },
    sudokoo: {
      isDark: false,
      foreground: "rgb(231, 231, 231)", // #e7e7e7
      background: "rgb(8, 8, 8)", // #080808
      overlay: "rgb(32, 32, 32)", // #202020
      overlaySolid: "rgb(32, 32, 32)", // #202020
      scrollbar: "rgb(49, 49, 49)", // #313131

      accent1: "rgb(182, 231, 166)", // #b6e7a6
      accent2: "rgb(97, 219, 231)", // #61dbe7
      accent3: "rgb(231, 153, 231)", // #e799e7
      primary: "rgb(97, 219, 231)", // #61dbe7
      primaryLight: "rgb(30,61,64)", //#1e3d40
    },
    uzumaki: {
      isDark: false,
      foreground: "rgb(0, 0, 0)", // #000
      background: "rgb(255, 255, 255)", // #fff
      overlay: "rgb(255, 255, 255)", // #fff
      overlaySolid: "rgb(255, 255, 255)", // #fff
      scrollbar: "rgb(0, 0, 0)", // #000

      accent1: "rgb(0, 0, 0)", // #000
      accent2: "rgb(0, 0, 0)", // #000
      accent3: "rgb(0, 0, 0)", // #000
      primary: "rgb(0, 0, 0)", // #000
      primaryLight: "rgb(255, 205, 205)", // #ffcdcd
    },
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  setTheme: () => {},
});

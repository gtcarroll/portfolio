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
      primary: "rgb(188, 201, 120)", // #bcc978
      primaryLight: "rgb(66, 72, 52)", // #424834
    },
    sudokoo: {
      isDark: true,
      foreground: "rgb(231, 231, 231)", // #e7e7e7
      background: "rgb(8, 8, 8)", // #080808
      overlay: "rgb(18, 18, 18)", // #121212
      overlaySolid: "rgb(18, 18, 18)", // #121212
      scrollbar: "rgb(49, 49, 49)", // #313131

      accent1: "rgb(182, 231, 166)", // #b6e7a6
      accent2: "rgb(231, 153, 231)", // #e799e7
      primary: "rgb(97, 219, 231)", // #61dbe7
      primaryLight: "rgb(30,61,64)", //#1e3d40
    },
    uzumaki: {
      isDark: true,
      foreground: "", //
      background: "", //
      overlay: "", //
      overlaySolid: "", //
      scrollbar: "", //

      accent1: "", //
      accent2: "", //
      primary: "", //
      primaryLight: "", //
    },
  },
  light: {
    default: {
      isDark: false,
      foreground: "rgb(54, 46, 38)", // #362E26
      background: "rgb(246, 241, 228)", // #F6F1E4
      overlay: "rgba(9, 14, 27, 0.05)", // #090E1B
      overlaySolid: "rgb(234,230,218)", // #EAE6DA
      scrollbar: "rgb(175, 173, 168)", // #AFADA8

      accent1: "rgb(173, 12, 155)", // #AD0C9B
      accent2: "rgb(13, 67, 191)", // #0D43BF
      primary: "rgb(14, 122, 124)", // #0E7A7C
      primaryLight: "rgb(176, 205, 197)", // #B0CDC5
    },
    recipes: {
      isDark: false,
      foreground: "rgb(54, 46, 38)", // #362E26
      background: "rgb(246, 241, 228)", // #F6F1E4
      overlay: "rgba(9, 14, 27, 0.05)", // #090E1B
      overlaySolid: "rgb(234,230,218)", // #EAE6DA
      scrollbar: "rgb(175, 173, 168)", // #AFADA8

      accent1: "rgb(173, 12, 155)", // #AD0C9B
      accent2: "rgb(13, 67, 191)", // #0D43BF
      primary: "rgb(14, 122, 124)", // #0E7A7C
      primaryLight: "rgb(176, 205, 197)", // #B0CDC5
    },
    sudokoo: {
      isDark: false,
      foreground: "rgb(231, 231, 231)", // #e7e7e7
      background: "rgb(8, 8, 8)", // #080808
      overlay: "rgb(18, 18, 18)", // #121212
      overlaySolid: "rgb(18, 18, 18)", // #121212
      scrollbar: "rgb(49, 49, 49)", // #313131

      accent1: "rgb(182, 231, 166)", // #b6e7a6
      accent2: "rgb(231, 153, 231)", // #e799e7
      primary: "rgb(97, 219, 231)", // #61dbe7
      primaryLight: "rgb(30,61,64)", //#1e3d40
    },
    uzumaki: {
      isDark: false,
      foreground: "", //
      background: "", //
      overlay: "", //
      overlaySolid: "", //
      scrollbar: "", //

      accent1: "", //
      accent2: "", //
      primary: "", //
      primaryLight: "", //
    },
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  setTheme: () => {},
});

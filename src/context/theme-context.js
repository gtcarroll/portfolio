import { createContext } from "react";
export const themes = {
  dark: {
    isDark: true,
    foreground: "rgb(201, 209, 217)", // #C9D1D9
    background: "rgb(13, 17, 23)", // #0D1117
    overlay: "rgba(242, 238, 232, 0.075)", // #F2EEE8
    scrollbar: "rgb(82, 83, 86)", // #525356

    accent1: "rgb(252, 136, 155)", // #FC889B
    accent2: "rgb(252, 200, 115)", // #FCC873
    primary: "rgb(188, 201, 120)", // #BCC978
    primaryLight: "rgb(66, 72, 52)", // #424834

    photoOverlay: "rgba(9, 14, 27, 0.6)", // #090E1B
    photoForeground: "rgb(246, 241, 228)", // #F6F1E4
  },
  light: {
    isDark: false,
    foreground: "rgb(54, 46, 38)", // #362E26
    background: "rgb(246, 241, 228)", // #F6F1E4
    overlay: "rgba(9, 14, 27, 0.05)", // #090E1B
    scrollbar: "rgb(175, 173, 168)", // #AFADA8

    accent1: "rgb(173, 12, 155)", // #AD0C9B
    accent2: "rgb(13, 67, 191)", // #0D43BF
    primary: "rgb(14, 122, 124)", // #0E7A7C
    primaryLight: "rgb(176, 205, 197)", // #B0CDC5

    photoOverlay: "rgba(242, 238, 232, 0.7)", // #F2EEE8
    photoForeground: "rgb(54, 46, 38)", // #362E26
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  setTheme: () => {},
});

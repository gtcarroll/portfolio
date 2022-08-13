import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IconButton, MenuHeader } from "./dependencies";
import {
  ThemeContext,
  themes,
  styles,
  units,
  functions,
  LayoutContext,
} from "../../context";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";

export const ThemeButtons = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const [themesIndex, setThemesIndex] = useState(theme.isDark ? 0 : 1);
  const themesData = [
    { label: "dark", icon: Moon },
    { label: "light", icon: Sun },
  ];
  let themesGradient = functions.getColorGradient(
    themesData.length,
    theme.accent1,
    theme.accent2
  );
  const themeClick = (newTheme) => {
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
  };
  let themeButtons = themesData.map((item, i) => {
    let isActiveTheme = i === themesIndex;
    return (
      <IconButton
        key={i}
        title={item.label}
        color={themesGradient[i]}
        icon={
          <item.icon
            fill={isActiveTheme ? theme.background : themesGradient[i]}
          />
        }
        isCentered
        isActive={isActiveTheme}
        onClick={() => {
          setThemesIndex(i);
          themeClick(themes[item.label]);
        }}
      />
    );
  });

  return (
    <ThemeButtonsDiv
      style={{
        width: `calc(${layout.width.menu} + 2 * ${units.rem2})`,
        backgroundColor: theme.overlay,
        boxShadow: styles.boxShadow.card,
      }}
    >
      <MenuHeader text={"Themes"} />
      <RowDiv>{themeButtons}</RowDiv>
    </ThemeButtonsDiv>
  );
};

ThemeButtons.defaultProps = {
  text: "default list item text",
};

const ThemeButtonsDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  // box model
  margin: ${units.rem1} auto;
  border-radius: ${styles.borderRadius.button};
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  // box model
  width: 100%;
  height: calc(2 * ${units.rem4});
  padding: 0;
`;

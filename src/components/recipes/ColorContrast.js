import React, { useContext } from "react";
import styled from "styled-components";
import { IconLabel, MenuHeader } from "./dependencies";
import {
  ThemeContext,
  styles,
  units,
  functions,
  LayoutContext,
} from "../../context";

export const ColorContrast = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const colorsData = {
    dark: [
      { hex: "#fc889b", contrast: "8.2" },
      { hex: "#fc9891", contrast: "9.0" },
      { hex: "#fca887", contrast: "10.0" },
      { hex: "#fcb87d", contrast: "11.1" },
      { hex: "#fcc873", contrast: "12.3" },
    ],
    light: [
      { hex: "#ad0c9b", contrast: "5.6" },
      { hex: "#851aa4", contrast: "6.9" },
      { hex: "#5d28ad", contrast: "7.8" },
      { hex: "#3535b6", contrast: "8.0" },
      { hex: "#0d43bf", contrast: "7.2" },
    ],
  };
  const primaryData = {
    dark: { hex: "#bcc978", contrast: "10.6" },
    light: { hex: "#0e7a7c", contrast: "4.5" },
  };
  let gradient = functions.getColorGradient(
    colorsData.dark.length,
    theme.accent1,
    theme.accent2
  );

  let colors = theme.isDark ? colorsData.dark : colorsData.light;
  let primary = theme.isDark ? primaryData.dark : primaryData.light;
  let colorRows = colors.map((color, i) => {
    return (
      <RowDiv key={i}>
        <IconLabel
          color={gradient[i]}
          label={color.hex}
          isActive
          isStacked
          isTop={i === 0}
          isBottom={i === gradient.length - 1}
        />
        <ContrastLabel
          style={{
            color: gradient[i],
            marginTop: i === 0 ? units.rem0 : null,
          }}
        >
          {color.contrast}
        </ContrastLabel>
      </RowDiv>
    );
  });
  colorRows.push(
    <RowDiv key={gradient.length}>
      <IconLabel color={theme.primary} label={primary.hex} isActive />
      <ContrastLabel
        style={{
          color: theme.primary,
          marginTop: units.rem0,
        }}
      >
        {primary.contrast}
      </ContrastLabel>
    </RowDiv>
  );

  return (
    <ColorContrastDiv
      style={{
        width: `calc(${layout.width.menu} + 2 * ${units.rem2})`,
      }}
    >
      <MenuHeader text={"Contrast Ratios"} />
      {colorRows}
    </ColorContrastDiv>
  );
};

ColorContrast.defaultProps = {
  text: "default list item text",
};

const ColorContrastDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  // box model
  margin: ${units.rem1} auto;
  border-radius: ${styles.borderRadius.button};
`;

const ContrastLabel = styled.div`
  // box model
  width: 100%;
  padding: ${units.rem0};
  padding-left: 0;
  width: ${units.rem6};

  // typography
  text-align: center;
  font-weight: bold;
`;

const RowDiv = styled.div`
  // flexbox
  display: grid;
  grid-template-columns: auto ${units.rem6};

  // box model
  width: 100%;
  padding: 0;
`;

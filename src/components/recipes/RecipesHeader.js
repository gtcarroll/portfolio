import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  units,
  styles,
  functions,
} from "../../context";

export const RecipesHeader = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const gradient = functions.getColorGradient(
    props.text.length + 4,
    theme.accent1,
    theme.accent2
  );
  let rainbowText = [];
  props.text.split("").forEach((c, i) => {
    rainbowText.push(
      <ColorSpan key={i} style={{ color: gradient[i + 2] }}>
        {c}
      </ColorSpan>
    );
  });
  return (
    <RecipesHeaderDiv
      style={{
        color: theme.accent2,
        backgroundColor: theme.overlay,
        fontSize: layout.fontSize.h1,
        maxWidth: layout.width.header,
      }}
    >
      {rainbowText}
    </RecipesHeaderDiv>
  );
};

RecipesHeader.defaultProps = {
  text: "default text",
  color: "rgb(255,255,255)",
};

const ColorSpan = styled.span`
  // animation
  transition: ${styles.transition.body};
`;

const RecipesHeaderDiv = styled.h1`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin: auto;
  border-radius: ${styles.borderRadius.header};
  width: 100%;
  padding-bottom: ${units.px0};
  box-shadow: ${styles.boxShadow.card};

  // sticky
  position: sticky;
  top: ${units.rem0};
  z-index: 10;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;

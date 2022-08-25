import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  units,
  styles,
  functions,
} from "../../context";

export const UzumakiHeader = (props) => {
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
    <UzumakiHeaderDiv
      style={{
        color: theme.foreground,
        backgroundColor: theme.background,
        fontSize: layout.fontSize.h1,
        maxWidth: layout.width.header,
        borderColor: theme.foreground,
      }}
    >
      {props.text}
    </UzumakiHeaderDiv>
  );
};

UzumakiHeader.defaultProps = {
  text: "default text",
  color: "rgb(255,255,255)",
};

const ColorSpan = styled.span`
  // animation
  transition: ${styles.transition.body};
`;

const UzumakiHeaderDiv = styled.h1`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin: auto;
  width: 100%;
  padding-bottom: ${units.px0};
  border: 1px solid;
  box-shadow: ${styles.boxShadow.card};

  // sticky
  position: sticky;
  top: ${units.rem0};
  z-index: 10;

  // typography
  /* font-family: ${styles.fontFamily.monospace}; */
  text-align: center;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  units,
  styles,
  functions,
} from "../../context";

export const SudokooHeader = (props) => {
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
  const transparent = {
    accent1: functions.addAlpha(theme.accent1, 0.15),
    accent2: functions.addAlpha(theme.accent2, 0.15),
    accent3: functions.addAlpha(theme.accent3, 0.15),
  };
  return (
    <SudokooHeaderDiv
      style={{
        backgroundColor: theme.background,
        maxWidth: layout.width.header,
      }}
    >
      <Overlay
        style={{
          // maxWidth: layout.width.header,
          color: theme.accent1,
          background: `conic-gradient(
            ${transparent.accent2} 0deg,
            ${transparent.accent1} 120deg,
            ${transparent.accent3} 240deg,
            ${transparent.accent2} 360deg
          )`,
          borderImage: `conic-gradient(
            ${theme.accent2} 0deg,
            ${theme.accent1} 120deg,
            ${theme.accent3} 240deg,
            ${theme.accent2} 360deg
          ) 2 / 1 / 0 stretch`,
        }}
      >
        {props.text}
      </Overlay>
    </SudokooHeaderDiv>
  );
};

const ColorSpan = styled.span`
  // animation
  transition: ${styles.transition.body};
`;

SudokooHeader.defaultProps = {
  text: "default text",
  color: "rgb(255,255,255)",
};

const Overlay = styled.h1`
  // animation
  transition: ${styles.transition.body};

  z-index: 10;
  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin: auto;
  border: 2px solid;
  width: 100%;
  padding-bottom: ${units.px0};
  box-shadow: ${styles.boxShadow.card};
`;

const SudokooHeaderDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  width: 100%;

  // sticky
  position: sticky;
  top: ${units.rem0};
  z-index: 10;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";

export const Header1 = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  return (
    <Header1Div
      style={{
        color: theme.background,
        backgroundColor: theme.primary,
        fontSize: layout.fontSize.h1,
        maxWidth: layout.width.header,
      }}
    >
      {props.text}
    </Header1Div>
  );
};

Header1.defaultProps = {
  text: "default text",
  color: "rgb(255,255,255)",
};

const Header1Div = styled.h1`
  // animation
  transition: ${styles.transition.bodyALL};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin: auto;
  border-radius: ${styles.borderRadius.header};
  width: 100%;
  padding-bottom: ${units.px0};

  // sticky
  /* position: sticky;
  top: ${units.rem0}; */

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;

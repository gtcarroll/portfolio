import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";

export const Header2 = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);

  return (
    <Header2Div
      style={{
        fontSize: layout.fontSize.h2,
        color: theme.primary,
      }}
    >
      {props.text}
    </Header2Div>
  );
};

Header2.defaultProps = {
  text: "default text",
};

const Header2Div = styled.h2`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  width: 100%;
  padding-bottom: ${units.px0};

  // typography
  text-align: center;
`;

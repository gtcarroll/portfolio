import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, styles, units, functions } from "../../../context";

export const MenuHeader = (props) => {
  const { theme } = useContext(ThemeContext);
  let transparentPrimary = functions.addAlpha(theme.primary, 0.3);
  return (
    <MenuHeaderDiv
      style={{
        color: theme.primary,
        border: props.isBorderless ? "none" : null,
        borderColor: props.isBorderless ? "transparent" : transparentPrimary,
        padding: props.isFullWidth ? `${units.rem0} 0` : null,
        margin: props.isFullWidth ? 0 : null,
        width: props.isFullWidth ? "100%" : null,
      }}
    >
      {props.text}
    </MenuHeaderDiv>
  );
};

const MenuHeaderDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  border-bottom: 3px solid;
  padding: ${units.rem0};
  margin: 0 ${units.rem1};
  width: calc(100% - 2 * (${units.rem0} + ${units.rem1}));

  // typography
  white-space: nowrap;
  font-family: ${styles.fontFamily.sansSerif};
  /* font-weight: bold; */
  text-align: center;
`;

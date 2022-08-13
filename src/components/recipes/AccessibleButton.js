import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IconButton } from "./dependencies";
import { ThemeContext, styles, units, LayoutContext } from "../../context";

export const AccessibleButton = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const [isActive, setActive] = useState(theme.isDark ? 0 : 1);

  return (
    <AccessibleButtonDiv
      style={{
        width: layout.width.menu,
        backgroundColor: theme.overlay,
        boxShadow: styles.boxShadow.card,
      }}
    >
      <OutlineDiv
        style={{
          color: theme.accent2,
        }}
      >
        <IconButton
          title={"Hover Me!"}
          label={"Hover Me!"}
          color={theme.accent2}
          isToggle
          isCentered
          isActive={isActive}
          onClick={() => {
            setActive(!isActive);
          }}
        />
      </OutlineDiv>
    </AccessibleButtonDiv>
  );
};

AccessibleButton.defaultProps = {
  text: "default list item text",
};

const AccessibleButtonDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  // box model
  margin: ${units.rem1} auto;
  border-radius: ${styles.borderRadius.button};
  padding: ${units.rem2};
`;

const OutlineDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  height: calc(2 * ${units.rem4});
  border: ${styles.border.button};
  border-style: dashed;
  border-radius: ${styles.borderRadius.button};
`;

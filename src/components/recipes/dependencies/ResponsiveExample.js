import React, { useContext } from "react";
import styled from "styled-components";
import { MenuHeader } from "./MenuHeader";
import { ThemeContext, styles, units } from "../../../context";

export const ResponsiveExample = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ColDiv
      style={{
        width: props.width,
      }}
    >
      <MenuHeader text={props.text} isFullWidth isBorderless />
      <ImageDiv
        style={{
          backgroundImage: `url(${props.src})`,
          boxShadow: styles.boxShadow.card,
          borderColor: theme.primaryLight,
        }}
      />
    </ColDiv>
  );
};

const ColDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  border-radius: ${styles.borderRadius.button};
  padding-bottom: ${units.rem2};
  height: 15rem;
`;

const ImageDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  width: 100%;
  height: 100%;
  max-width: ${units.pxImg};
  border: ${styles.border.button};
  border-radius: ${styles.borderRadius.button};
  box-sizing: border-box;

  // background image
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

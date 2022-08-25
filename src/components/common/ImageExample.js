import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, styles, units, LayoutContext } from "../../context";

export const ImageExample = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const themeSuffix =
    props.isDark === undefined ? "" : props.isDark ? "_dark" : "_light";
  const image = require(`../../assets/photos/${props.project}/${props.img}${themeSuffix}.jpg`);
  const isMobile = layout.name === "mobile";
  return (
    <ImageDiv
      style={{
        backgroundImage: `url(${image})`,
        height: isMobile ? layout.height.hero : "15rem",
        maxWidth:
          !props.isWide && isMobile
            ? `calc(6 * ${layout.height.hero} / 5)`
            : null,
        boxShadow: styles.boxShadow.card,
        marginTop: isMobile ? null : `calc(${units.rem2} + 3px)`,
        backgroundPosition: props.backgroundPosition,
      }}
    />
  );
};

const ImageDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  width: 100%;
  /* height: 15rem; */
  max-width: ${units.pxImg};
  border-radius: ${styles.borderRadius.button};
  box-sizing: border-box;

  // background image
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

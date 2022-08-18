import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  themes,
  LayoutContext,
  units,
  styles,
  useThemeChange,
} from "../../context";

export const Hero = (props) => {
  const containerRef = useThemeChange(props.project);
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const image = require(`../../assets/photos/${props.project}/${props.img}.jpg`);
  return (
    <Link
      ref={containerRef}
      href={"https://gtcarroll.github.io/" + props.project}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Fig>
        <HeroImg
          style={{
            backgroundImage: `url(${image})`,
            height: layout.height.hero,
            maxWidth: units.pxImg,
            borderColor: theme.primaryLight,
          }}
          draggable="false"
        />
        <FigCaption
          style={{
            backgroundColor: isHovered
              ? theme.primaryLight
              : theme.overlaySolid,
            color: theme.primary,
            fontSize: layout.fontSize.body,
          }}
        >
          go to {props.project + " "} <UnicodeSpan>→</UnicodeSpan>
        </FigCaption>
      </Fig>
    </Link>
  );
};

Hero.defaultProps = {
  text: "default text",
  backgroundImage: "",
  isScreenWidth: false,
  tags: {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
  },
};

const Link = styled.a`
  // box model
  display: block;
  width: 100%;

  // typography
  text-decoration: none;
`;
const Fig = styled.figure`
  // box model
  width: 100%;
  border-radius: ${styles.borderRadius.button};
`;
const FigCaption = styled.figcaption`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  align-content: center;
  justify-content: center;

  // box model
  width: 100%;
  border-radius: ${styles.borderRadius.button};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-bottom: ${units.rem0};

  // typography
  text-align: center;
  white-space: nowrap;

  // box model
  padding: ${units.rem1} ${units.rem2};
  margin: 0 auto;
  margin-top: calc(-${units.rem5} / 2);
  border-radius: ${styles.borderRadius.button};
  width: min-content;
  min-height: calc(${units.rem5} / 2);

  box-shadow: ${styles.boxShadow.card};
`;
const UnicodeSpan = styled.span`
  // typography
  font-family: ${styles.fontFamily.monospace};
  padding-left: ${units.rem0};
`;

const HeroImg = styled.div`
  // animation
  transition: ${styles.transition.button};

  // box model
  width: 100%;
  max-width: ${units.pxImg};
  border: ${styles.border.button};
  border-radius: ${styles.borderRadius.button};
  /* border-bottom-left-radius: 0;
  border-bottom-right-radius: 0; */
  box-sizing: border-box;
  box-shadow: ${styles.boxShadow.card};

  // background image
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

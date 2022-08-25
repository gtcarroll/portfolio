import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  units,
  styles,
  functions,
} from "../../context";

export const Hero = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const image = require(`../../assets/photos/${props.project}/${props.img}.jpg`);
  let transparentPrimary = functions.addAlpha(theme.primary, 0.3);
  return (
    <Link
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
          }}
          draggable="false"
        />
        <Underlay
          style={{
            backgroundColor: theme.background,
          }}
        >
          <FigCaption
            style={{
              backgroundColor: isHovered ? transparentPrimary : theme.overlay,
              color: theme.primary,
              fontSize: layout.fontSize.body,
            }}
          >
            go to {props.project + " "} <UnicodeSpan>→</UnicodeSpan>
          </FigCaption>
        </Underlay>
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
const Underlay = styled.div`
  // box model
  margin: 0 auto;
  margin-top: calc(-${units.rem5} / 2);
  border-radius: ${styles.borderRadius.button};
  width: min-content;
  min-height: calc(${units.rem5} / 2);

  box-shadow: ${styles.boxShadow.card};
`;
const Fig = styled.figure`
  // box model
  width: 100%;
  border-radius: ${styles.borderRadius.button};
`;
const FigCaption = styled.figcaption`
  // animation
  transition: ${styles.transition.button};

  // box model
  padding: ${units.rem1} ${units.rem2};
  border-radius: ${styles.borderRadius.button};
  /* width: 100%; */
  /* height: 100%; */

  // typography
  text-align: center;
  white-space: nowrap;
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
  border-radius: ${styles.borderRadius.button};
  box-sizing: border-box;
  box-shadow: ${styles.boxShadow.card};

  // background image
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  styles,
  units,
} from "../../../context";

export const JellyButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { layout } = useContext(LayoutContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  let isMobile = layout.name === "mobile";
  return (
    <ButtonContainer
      tabIndex={props.disabled ? "-1" : "0"}
      onClick={props.disabled ? null : props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        flexGrow: props.isHidden ? 0 : props.isBig ? 2 : null,
        marginLeft: !props.isHidden && props.isRight ? units.rem1 : null,
        marginRight: !props.isHidden && props.isLeft ? units.rem1 : null,
      }}
    >
      <Button
        style={{
          fontSize: layout.fontSize.body,
          color: props.isHidden ? "transparent" : props.color,
          borderColor: props.isHidden ? "transparent" : props.color,
          backgroundColor: isHovered ? transparentColor : "transparent",
          top: (isMobile || isHovered) && !isActive ? 0 : null,
          borderWidth:
            (isMobile || isHovered) && !isActive ? "2px 2px 9px 2px" : null,
        }}
      >
        {props.text}
      </Button>
    </ButtonContainer>
  );
};

JellyButton.defaultProps = {};

const ButtonContainer = styled.button`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-grow: 1;

  // position
  position: relative;

  // box model
  height: calc(11px + ${units.rem4});
`;

const Button = styled.div`
  // animation
  transition: 0.1s ease-out; // ${styles.transition.button};

  // position
  top: 7px;
  position: absolute;
  box-sizing: border-box;

  // box model
  border-width: 2px;
  border-style: solid;
  width: 100%;
  padding: ${units.rem0};
  padding-bottom: ${units.rem1};

  // typography
  white-space: nowrap;
  overflow: hidden;

  // psuedo-selectors
  &:active {
    top: 7px !important;
    border-width: 2px !important;
  }
`;

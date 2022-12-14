import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../../../context";

export const IconButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <IconButtonDiv
      tabIndex={props.tabIndex}
      onClick={() => {
        if (!props.isActive || props.isToggle) props.onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        justifyContent: props.isCentered ? "center" : null,
      }}
      title={props.title}
    >
      <DisplayDiv
        style={{
          fontSize: layout.fontSize.body,
          color: props.isActive
            ? theme.background
            : props.textColor
            ? props.textColor
            : theme.foreground,
          backgroundColor: props.isActive
            ? props.color
            : isHovered
            ? transparentColor
            : "transparent",
        }}
      >
        {props.icon && (
          <Icon>
            <props.icon
              fill={props.isActive ? theme.background : props.color}
            />
          </Icon>
        )}
        {props.label && <Label>{props.label}</Label>}
      </DisplayDiv>
    </IconButtonDiv>
  );
};

IconButton.defaultProps = {
  isToggle: false,
  isActive: false,
  isCentered: false,
  icon: null,
  label: "",
  title: null,
  color: "rgb(125, 125, 0)",
};

const IconButtonDiv = styled.button`
  // animation
  cursor: pointer;

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  border-radius: ${styles.borderRadius.button};
  width: 100%;
  height: 100%;
`;

const DisplayDiv = styled.div`
  // animation
  transition: ${styles.transition.button};

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  border-radius: ${styles.borderRadius.button};
  padding: ${units.rem0};
  margin: auto ${units.rem0};
  width: min-content;
  height: min-content;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;

const Label = styled.div`
  // animation
  transition: ${styles.transition.button};

  // box model
  padding: 0 ${units.rem1};

  // typography
  white-space: nowrap;
`;

const Icon = styled.div`
  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  width: ${units.rem3};
  height: ${units.rem3};

  svg {
    transition: ${styles.transition.button};
  }
`;

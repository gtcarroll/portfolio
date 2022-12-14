import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  LayoutContext,
  functions,
  units,
  styles,
} from "../../../context";

export const IconLabel = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  let isMiddle = props.isStacked && !props.isTop && !props.isBottom;
  let transparentColor = functions.addAlpha(props.color, 0.3);
  return (
    <IconLabelDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        justifyContent: props.isCentered ? "center" : null,
        cursor: "inherit",
      }}
      title={props.title}
    >
      <DisplayDiv
        style={{
          fontSize: layout.fontSize.body,
          color: props.isActive ? theme.background : theme.foreground,
          backgroundColor: props.isActive
            ? props.color
            : isHovered
            ? transparentColor
            : "transparent",
          // padding: props.isStacked ? 0 : null,
          marginTop: props.isStacked && !props.isTop ? 0 : null,
          marginBottom: props.isStacked ? 0 : null,
          borderTopLeftRadius: props.isBottom || isMiddle ? 0 : null,
          borderTopRightRadius: props.isBottom || isMiddle ? 0 : null,
          borderBottomLeftRadius: props.isTop || isMiddle ? 0 : null,
          borderBottomRightRadius: props.isTop || isMiddle ? 0 : null,
          boxShadow: styles.boxShadow.card,
        }}
      >
        {props.icon && <Icon>{props.icon}</Icon>}
        {props.label && <Label>{props.label}</Label>}
      </DisplayDiv>
    </IconLabelDiv>
  );
};

IconLabel.defaultProps = {
  isActive: false,
  isCentered: false,
  icon: null,
  label: "",
  title: null,
  color: "rgb(125, 125, 0)",
};

const IconLabelDiv = styled.div`
  // animation
  cursor: default;

  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  border-radius: ${styles.borderRadius.button};
  width: 100%;
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
  margin: ${units.rem0};
  width: 100%;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;

const Label = styled.div`
  // animation
  transition: ${styles.transition.button};

  // box model
  padding: 0 ${units.rem1};
  width: 100%;

  // typography
  white-space: nowrap;
  text-align: center;
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

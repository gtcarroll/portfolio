import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IconButton } from "./dependencies";
import {
  ThemeContext,
  styles,
  units,
  functions,
  LayoutContext,
} from "../../context";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Vegetarian } from "../../assets/icons/vegetarian.svg";
import { ReactComponent as Vegan } from "../../assets/icons/vegan-plus.svg";
import { ReactComponent as GlutenFree } from "../../assets/icons/gluten-free.svg";
import { ReactComponent as Imperial } from "../../assets/icons/measuring-cup.svg";
import { ReactComponent as Metric } from "../../assets/icons/gram-weight.svg";

export const IconGallery = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const [activeButtons, setActiveButtons] = useState({
    dark: false,
    light: false,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    imperial: false,
    metric: false,
  });
  const iconData = [
    [
      { label: "dark", value: "dark", icon: Moon },
      { label: "light", value: "light", icon: Sun },
    ],
    [
      { label: "vegetarian", value: "vegetarian", icon: Vegetarian },
      { label: "vegan", value: "vegan", icon: Vegan },
      { label: "gluten-free", value: "glutenFree", icon: GlutenFree },
    ],
    [
      { label: "imperial", value: "imperial", icon: Imperial },
      { label: "metric", value: "metric", icon: Metric },
    ],
  ];

  let iconRows = iconData.map((iconRow, r) => {
    let gradient = functions.getColorGradient(
      iconRow.length,
      theme.accent1,
      theme.accent2
    );
    let icons = iconRow.map((item, i) => {
      return (
        <IconButton
          key={i}
          title={item.label}
          color={gradient[i]}
          icon={
            <item.icon
              fill={activeButtons[item.value] ? theme.background : gradient[i]}
            />
          }
          isActive={activeButtons[item.value]}
          isToggle
          isCentered
          onClick={() => {
            let updatedButtons = { ...activeButtons };
            updatedButtons[item.value] = !activeButtons[item.value];
            setActiveButtons(updatedButtons);
          }}
        />
      );
    });
    return (
      <RowDiv
        key={r}
        style={{
          width:
            iconRow.length < 3
              ? "66.667%" //`calc(100% - (${layout.width.menu} + 2 * ${units.rem2}) / 3)`
              : null,
        }}
      >
        {icons}
      </RowDiv>
    );
  });

  return (
    <IconGalleryDiv
      style={{
        width: `calc(${layout.width.menu} + 2 * ${units.rem2})`,
      }}
    >
      {iconRows}
    </IconGalleryDiv>
  );
};

IconGallery.defaultProps = {
  text: "default list item text",
};

const IconGalleryDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  // box model
  margin: ${units.rem1} auto;
  border-radius: ${styles.borderRadius.button};
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  // box model
  width: 100%;
  height: calc(2 * ${units.rem3});
  padding: 0;
  margin: 0 auto;
`;

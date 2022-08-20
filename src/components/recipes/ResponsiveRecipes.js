import React, { useContext } from "react";
import styled from "styled-components";
import { ResponsiveExample } from "../common";
import { ThemeContext, styles, units, LayoutContext } from "../../context";
import mobileD from "../../assets/photos/recipes/responsive_mobile_dark.jpg";
import tabletD from "../../assets/photos/recipes/responsive_tablet_dark.jpg";
import desktopD from "../../assets/photos/recipes/responsive_desktop_dark.jpg";
import mobileL from "../../assets/photos/recipes/responsive_mobile_light.jpg";
import tabletL from "../../assets/photos/recipes/responsive_tablet_light.jpg";
import desktopL from "../../assets/photos/recipes/responsive_desktop_light.jpg";

export const ResponsiveRecipes = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);

  return (
    <ResponsiveRecipesDiv
      style={{
        width: layout.width.ingredients,
      }}
    >
      <RowDiv>
        <ResponsiveExample
          src={theme.isDark ? mobileD : mobileL}
          text="Mobile"
          width={
            layout.name !== "mobile"
              ? `calc(0.18 * ${layout.width.ingredients})`
              : "35%"
          } // "7rem"
        />
        <ResponsiveExample
          src={theme.isDark ? tabletD : tabletL}
          text="Tablet"
          width={
            layout.name !== "mobile"
              ? `calc(0.24 * ${layout.width.ingredients})`
              : "60%"
          } // "24%" // "9rem"
        />
        <ResponsiveExample
          src={theme.isDark ? desktopD : desktopL}
          text="Desktop"
          width={
            layout.name !== "mobile"
              ? `calc(0.5 * ${layout.width.ingredients})`
              : "100%"
          } //"50%" // "18rem"
          isDesktop
        />
      </RowDiv>
    </ResponsiveRecipesDiv>
  );
};

ResponsiveRecipes.defaultProps = {
  text: "default list item text",
};

const ResponsiveRecipesDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  border-radius: ${styles.borderRadius.button};
  max-width: calc(100vw - 2 * ${units.rem4});
`;

const RowDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

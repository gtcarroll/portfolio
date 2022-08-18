import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  units,
  styles,
  functions,
  LayoutContext,
} from "../../context";
import { Header1 } from "./Header1";
import { Section } from "./Section";
import {
  ThemeButtons,
  IngredientList,
  InstructionList,
  AccessibleButton,
  ResponsiveDesign,
  IconGallery,
} from "../recipes";
import { ContentContainer, Hero } from "../common";
import { ColorContrast } from "../recipes/ColorContrast";

export const Project = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  const recipe = require("../recipes/dependencies/peanut-butter-cookies.json");
  const [state, setState] = useState({
    ingredients: recipe.ingredients,
    yields: recipe.yields,
    units: "imperial",
  });
  const originalState = {
    ingredients: recipe.ingredients,
    yields: recipe.yields,
  };
  const gradient = functions.getColorGradient(
    recipe.ingredients.length,
    theme.accent1,
    theme.accent2
  );
  const components = {
    goals: {},
    features: {
      IngredientList: {
        tag: IngredientList,
        props: {
          units: state.units,
          ingredients: state.ingredients,
          yields: state.yields,
          setState: setState,
          originalState: originalState,
          gradient: gradient,
        },
      },
      InstructionList: {
        tag: InstructionList,
        props: {
          units: state.units,
          ingredients: state.ingredients,
          instructions: recipe.instructions,
          gradient: gradient,
        },
      },
      ThemeButtons: { tag: ThemeButtons, props: {} },
      AccessibleButton: { tag: AccessibleButton, props: {} },
      ResponsiveDesign: { tag: ResponsiveDesign, props: {} },
      IconGallery: { tag: IconGallery, props: {} },
      ColorContrast: { tag: ColorContrast, props: {} },
    },
    learned: {},
  };
  const sectionData = [
    { title: "Project Goals", key: "goals" },
    { title: "Features", key: "features" },
    { title: "What I Learned", key: "learned" },
  ];

  let sections = sectionData.map((section, i) => {
    return (
      <Section
        key={i}
        title={section.title}
        items={props[section.key]}
        url={props.url}
        components={components[section.key]}
        isFeatures={section.title === "Features"}
      />
    );
  });

  return (
    <ProjectDiv>
      <ContentContainer width={layout.width.ingredients}>
        <Header1 text={props.name} color={theme.foreground} />
        <Hero
          project={"recipes"}
          url={props.url}
          img={
            theme.isDark
              ? "responsive_desktop_dark"
              : "responsive_desktop_light"
          }
          to={"https://gtcarroll.github.io/recipes/"}
        />
        {/* <ImageDiv
          style={{
            backgroundImage: `url(${heroD})`,
            boxShadow: styles.boxShadow.card,
            borderColor: theme.primaryLight,
          }}
        /> */}
        {sections}
      </ContentContainer>
    </ProjectDiv>
  );
};

const ProjectDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  /* gap: ${units.rem1}; */

  // box-model
  margin: 0 auto;
  margin-bottom: ${units.rem6};
  width: 100%;
`;

const ImageDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box model
  width: 100%;
  height: 19rem;
  max-width: ${units.pxImg};
  border: ${styles.border.button};
  border-radius: ${styles.borderRadius.button};
  box-sizing: border-box;

  // background image
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

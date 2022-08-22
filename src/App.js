import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  themes,
  LayoutContext,
  layouts,
  styles,
  functions,
} from "./context";
import { Project } from "./components/project";
import { ImageExample } from "./components/common";
import {
  RecipesHeader,
  ThemeButtons,
  IngredientList,
  InstructionList,
  AccessibleButton,
  ResponsiveRecipes,
  IconGallery,
  ColorContrast,
} from "./components/recipes";
import {
  SudokooHeader,
  ResponsiveSudokoo,
  ButtonTray,
} from "./components/sudokoo";
import { UzumakiHeader, ResponsiveDesign } from "./components/uzumaki";

export const App = () => {
  const getLayout = (width) => {
    return width > layouts.desktop.minWidth
      ? layouts.desktop
      : width > layouts.laptop.minWidth
      ? layouts.laptop
      : width > layouts.tablet.minWidth
      ? layouts.tablet
      : layouts.mobile;
  };

  // set theme metadata based on user preferences
  useEffect(() => {
    let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.style.setProperty(
      "--root-background-color",
      isDark ? themes.dark.background : themes.light.background
    );
    document.documentElement.style.setProperty(
      "--root-scrollbar-color",
      isDark
        ? themes.dark.scrollbar + " " + themes.dark.background
        : themes.light.scrollbar + " " + themes.light.background
    );
  }, []);

  // update layout on resize or orientation change
  useEffect(() => {
    const checkResize = () => {
      setLayout(getLayout(window.innerWidth));
    };
    checkResize();
    window.addEventListener("resize", checkResize);
    window.addEventListener("orientationchange", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);

  // set context values
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  document.documentElement.style.setProperty("color-scheme", preferredTheme);
  const [theme, setTheme] = useState(themes[preferredTheme].default);
  const [layout, setLayout] = useState(getLayout(window.innerWidth));

  // create project components
  const recipe = require("./components/recipes/dependencies/peanut-butter-cookies.json");
  const projectData = [
    require("./assets/projects/recipes.json"),
    require(`./assets/projects/sudokoo.json`),
    require("./assets/projects/uzumaki.json"),
  ];

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
    recipes: {
      Header: {
        tag: RecipesHeader,
        props: {},
      },
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
      ResponsiveRecipes: { tag: ResponsiveRecipes, props: {} },
      IconGallery: { tag: IconGallery, props: {} },
      ColorContrast: { tag: ColorContrast, props: {} },
    },
    sudokoo: {
      Header: { tag: SudokooHeader, props: {} },
      ResponsiveSudokoo: { tag: ResponsiveSudokoo, props: {} },
      ButtonTray: { tag: ButtonTray, props: {} },
      CrowImage: {
        tag: ImageExample,
        props: { project: "sudokoo", img: "crow" },
      },
      InputImage: {
        tag: ImageExample,
        props: { project: "sudokoo", img: "input" },
      },
      HighlightImage: {
        tag: ImageExample,
        props: { project: "sudokoo", img: "highlight" },
      },
    },
    uzumaki: {
      Header: { tag: UzumakiHeader, props: {} },
      ResponsiveDesign: { tag: ResponsiveDesign, props: {} },
      SpawnImage: {
        tag: ImageExample,
        props: {
          project: "uzumaki",
          img: "spawn",
          isDark: theme.isDark,
          isWide: true,
          backgroundPosition: "bottom",
        },
      },
      TraceImage: {
        tag: ImageExample,
        props: {
          project: "uzumaki",
          img: "trace",
          isDark: theme.isDark,
          isWide: true,
          backgroundPosition: "bottom",
        },
      },
      WarpImage: {
        tag: ImageExample,
        props: {
          project: "uzumaki",
          img: "warp",
          isDark: theme.isDark,
          isWide: true,
          backgroundPosition: "center",
        },
      },
      WitnessImage: {
        tag: ImageExample,
        props: {
          project: "uzumaki",
          img: "witness",
          isDark: theme.isDark,
          isWide: true,
          backgroundPosition: "bottom",
        },
      },
    },
  };
  const fontFamily = {
    recipes: styles.fontFamily.sansSerif,
    sudokoo: styles.fontFamily.sansSerif,
    uzumaki: styles.fontFamily.monospace,
  };
  let projects = projectData.map((project, i) => {
    return (
      <Project
        key={i}
        fontFamily={fontFamily[project.url]}
        components={components[project.url]}
        {...project}
      />
    );
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <LayoutContext.Provider
        value={{
          layout,
          setLayout,
        }}
      >
        <AppDiv
          style={{
            color: theme.foreground,
            backgroundColor: theme.background,
            fontSize: layout.fontSize.body,
          }}
        >
          {projects}
        </AppDiv>
      </LayoutContext.Provider>
    </ThemeContext.Provider>
  );
};

const AppDiv = styled.main`
  // animation
  transition: background-color ${styles.transition.body},
    color ${styles.transition.body};

  // box model
  height: auto;
  max-width: 100vw;

  // typography
  font-family: ${styles.fontFamily.sansSerif};
`;

import { createContext } from "react";
export const layouts = {
  mobile: {
    name: "mobile",
    minWidth: 0,
    width: {
      header: "19rem",
      ingredients: "31rem",
      instructions: "31rem",
      menu: "10rem",
      menuSpacer: "0",
    },
    height: {
      hero: "16rem",
    },
    fontSize: {
      h1: "2.4rem",
      h2: "1.8rem",
      h3: "1.5rem",
      body: "1.2rem",
      caption: "1rem",
    },
  },
  tablet: {
    name: "tablet",
    minWidth: 768,
    width: {
      header: "21.5rem",
      ingredients: "35rem",
      instructions: "35rem",
      menu: "11rem",
      menuSpacer: "1.8rem",
    },
    height: {
      hero: "21rem",
    },
    fontSize: {
      h1: "2.55rem",
      h2: "1.95rem",
      h3: "1.65rem",
      body: "1.35rem",
      caption: "1.15rem",
    },
  },
  laptop: {
    name: "laptop",
    minWidth: 962,
    width: {
      header: "24rem",
      ingredients: "39rem",
      instructions: "39rem",
      menu: "12rem",
      menuSpacer: "2.4rem",
    },
    height: {
      hero: "24rem",
    },
    fontSize: {
      h1: "2.7rem",
      h2: "2.1rem",
      h3: "1.8rem",
      body: "1.5rem",
      caption: "1.2rem",
    },
  },
  desktop: {
    name: "desktop",
    minWidth: 1382,
    width: {
      header: "24rem",
      ingredients: "39rem",
      instructions: "63rem",
      menu: "12rem",
      menuSpacer: "2.4rem",
    },
    height: {
      hero: "24rem",
    },
    fontSize: {
      h1: "2.7rem",
      h2: "2.1rem",
      h3: "1.8rem",
      body: "1.5rem",
      caption: "1.2rem",
    },
  },
};

export const LayoutContext = createContext({
  layout: layouts.mobile,
  setLayout: () => {},
});

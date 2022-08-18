import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, units, styles, LayoutContext } from "../../context";
import { Section } from "./Section";
import { ContentContainer, Hero } from "../common";

export const Project = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
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
        components={props.components}
        isFeatures={section.title === "Features"}
      />
    );
  });

  return (
    <ProjectDiv style={{ fontFamily: props.fontFamily }}>
      <ContentContainer width={layout.width.ingredients}>
        <props.components.Header.tag
          text={props.name}
          color={theme.foreground}
        />
        <Hero
          project={props.url}
          img={theme.isDark ? "hero_dark" : "hero_light"}
        />
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

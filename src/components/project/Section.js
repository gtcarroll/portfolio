import React, { useContext } from "react";
import styled from "styled-components";
import {
  ThemeContext,
  functions,
  units,
  styles,
  useThemeChange,
} from "../../context";
import { Header2 } from "./Header2";
import { Feature } from "./Feature";
import { ListItem } from "./ListItem";

// count <b> tags for color gradient
const countTags = (items) => {
  let tagTotal = 0;
  items.forEach((item) => {
    if (typeof item !== "object") {
      tagTotal += item.split("<b>").length - 1;
    }
  });
  return tagTotal;
};

const buildListItems = (props, gradient) => {
  let tagsSoFar = 0;
  let listItems = props.items.map((item, i) => {
    let isObject = typeof item === "object";
    const result = isObject ? (
      <Feature
        key={i}
        url={props.url}
        componentData={props.components[item.component]}
        {...item}
        isLeft
      />
    ) : (
      <ListItem
        key={i}
        text={item}
        colorIndex={tagsSoFar}
        gradient={gradient}
      />
    );
    tagsSoFar += isObject ? 0 : item.split("<b>").length - 1;
    return result;
  });

  return listItems;
};

export const Section = (props) => {
  const containerRef = useThemeChange(props.url);
  const { theme } = useContext(ThemeContext);
  let gradient = functions.getColorGradient(
    countTags(props.items),
    theme.accent1,
    theme.accent2
  );
  let listItems = buildListItems(props, gradient);
  return (
    <SectionDiv ref={containerRef}>
      <Header2 text={props.title} />
      {!props.isFeatures && (
        <Underline
          style={{
            borderColor: theme.scrollbar,
          }}
        />
      )}
      {listItems}
    </SectionDiv>
  );
};

const SectionDiv = styled.ul`
  // flexbox
  display: flex;
  flex-direction: column;

  // box-model
  margin: auto;
  max-width: 100%;
`;

const Underline = styled.div`
  // animation
  transition: ${styles.transition.body};

  // box-model
  width: 100%;
  border-bottom: 3px solid;
  margin: ${units.rem0} 0;
`;

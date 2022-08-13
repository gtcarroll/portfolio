import React, { useContext } from "react";
import styled from "styled-components";
import { LayoutContext } from "../../context";
import { Header2 } from "./Header2";
import { Feature } from "./Feature";
import { ListItem } from "./ListItem";

export const Section = (props) => {
  const { layout } = useContext(LayoutContext);

  let listItems = props.items.map((item, i) => {
    return typeof item === "object" ? (
      <Feature
        key={i}
        url={props.url}
        componentData={props.components[item.component]}
        {...item}
        isLeft
      />
    ) : (
      <ListItem key={i} text={item} />
    );
  });

  return (
    <SectionDiv>
      <Header2 text={props.title} />
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

import React, { useContext } from "react";
import styled from "styled-components";
import { LayoutContext } from "../../context";

export const ListItem = (props) => {
  const { layout } = useContext(LayoutContext);
  return <ListItemDiv>{props.text}</ListItemDiv>;
};

ListItem.defaultProps = {
  text: "default list item text",
};

const ListItemDiv = styled.li``;

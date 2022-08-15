import React from "react";
import styled from "styled-components";
import { units, styles } from "../../context";

const buildHTMLText = (rawText, gradient, gStart) => {
  let i = 0;
  let g = gStart;
  let tag = { open: "<b>", close: "</b>" };
  let tagPos = rawText.search(tag.open);
  let result = [];

  while (tagPos !== -1) {
    // add unbolded text
    result.push(rawText.slice(i, tagPos));

    // add bolded text
    i = tagPos + tag.open.length;
    tagPos = rawText.search(tag.close);
    result.push(
      <b style={{ color: gradient[g] }} key={g}>
        {rawText.slice(i, tagPos)}
      </b>
    );

    // update index variables
    rawText = rawText.slice(tagPos + tag.close.length, rawText.length);
    tagPos = rawText.search(tag.open);
    i = 0;
    g++;
  }

  // add remaining text
  result.push(rawText.slice(i, rawText.length));

  return result;
};

export const ListItem = (props) => {
  let text = buildHTMLText(props.text, props.gradient, props.colorIndex);
  return <ListItemDiv>{text}</ListItemDiv>;
};

ListItem.defaultProps = {
  text: "default list item text",
};

const ListItemDiv = styled.li`
  // box-model
  margin: auto;
  width: calc(100% - 2 * ${units.rem2});
  padding: ${units.rem1};

  // typography
  text-align: center;
  list-style-type: none;

  b {
    // animation
    transition: ${styles.transition.body};
  }
`;

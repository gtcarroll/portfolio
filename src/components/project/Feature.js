import React, { useContext } from "react";
import styled from "styled-components";
import {
  LayoutContext,
  ThemeContext,
  units,
  styles,
  functions,
} from "../../context";
import { ContentContainer } from "../common/ContentContainer";

export const Feature = (props) => {
  const { layout } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);
  const component = props.componentData;
  const image = props.image
    ? require(`../../assets/photos/${props.url}/${props.image}.png`)
    : null;

  let transparentPrimary = functions.addAlpha(theme.primary, 0.3);
  return (
    <FeatureDiv
      style={{
        // width: layout.width.ingredients,
        borderColor: props.isBorderless ? "transparent" : transparentPrimary,
        flexDirection: props.flexDirection,
        flexWrap: layout.name === "mobile" ? "wrap" : "nowrap",
        maxWidth: layout.width.ingredients,
      }}
    >
      <Text>{props.text}</Text>
      <ContentContainer noPadding>
        {component !== undefined && <component.tag {...component.props} />}
        {image !== null && (
          <Image
            style={{
              backgroundImage: `url(${image})`,
              height: layout.height.hero,
              maxWidth: units.pxImg,
            }}
          />
        )}
      </ContentContainer>
    </FeatureDiv>
  );
};

Feature.defaultProps = {
  text: "default list item text",
};

const FeatureDiv = styled.li`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  border-top: 3px solid;

  // box-model
  margin: ${units.rem0} auto;
  padding: ${units.rem0} 0;
  width: 100%;
`;
const Text = styled.p`
  // animation
  transition: ${styles.transition.body};

  // box-model
  margin: auto;
  width: 100%;
  padding: ${units.rem1} 0;
  padding-bottom: ${units.rem2};

  // typography
  text-align: center;
`;
const Image = styled.div`
  // background image
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

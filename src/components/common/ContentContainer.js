import React, { useContext } from "react";
import styled from "styled-components";
import { LayoutContext, units, styles } from "../../context";

export const ContentContainer = (props) => {
  const { layout } = useContext(LayoutContext);
  return (
    <ContentDiv
      style={{
        width: props.width,
        flexWrap: props.flexWrap,
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        padding: props.noPadding
          ? 0
          : layout.name === "mobile"
          ? units.rem2
          : units.rem4,
        maxWidth:
          layout.name === "mobile"
            ? `calc(100vw - 2 * ${units.rem2})`
            : `calc(100vw - 2 * ${units.rem4})`,
      }}
    >
      {props.children}
    </ContentDiv>
  );
};

ContentContainer.defaultProps = {
  width: "100%",
  flexWrap: "nowrap",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const ContentDiv = styled.div`
  // animation
  transition: width ${styles.transition.body};

  // flexbox
  display: flex;
  align-items: center;
  gap: ${units.rem5};

  // box model
  max-width: calc(100vw - 2 * ${units.rem4});
  padding: ${units.rem4};
  margin: 0 auto;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import { ResponsiveExample } from "../common";
import { styles, units, LayoutContext } from "../../context";
import mobile from "../../assets/photos/sudokoo/responsive_mobile.jpg";
import desktop from "../../assets/photos/sudokoo/responsive_desktop.jpg";

export const ResponsiveSudokoo = (props) => {
  const { layout } = useContext(LayoutContext);
  let height = layout.name === "mobile" ? null : "20rem";
  return (
    <ResponsiveSudokooDiv
      style={{
        width: layout.width.ingredients,
      }}
    >
      <RowDiv>
        <ResponsiveExample
          src={mobile}
          text="Mobile"
          width={"25%"}
          height={height}
        />
        <ResponsiveExample
          src={desktop}
          text="Desktop"
          width={"70%"}
          height={height}
          isDesktop
        />
      </RowDiv>
    </ResponsiveSudokooDiv>
  );
};

ResponsiveSudokoo.defaultProps = {
  text: "default list item text",
};

const ResponsiveSudokooDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;

  // box model
  border-radius: ${styles.borderRadius.button};
  max-width: calc(100vw - 2 * ${units.rem4});
`;

const RowDiv = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

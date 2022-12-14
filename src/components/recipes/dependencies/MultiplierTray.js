import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext, functions, units, styles } from "../../../context";
import { NumberButton } from "./NumberButton.js";
import { NumberInput } from "./NumberInput";

export const MultiplierTray = (props) => {
  const buttonValues = ["1/2", "1", "2"];
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    activeIndex: buttonValues.indexOf("1"),
    customMultiple: "",
  });
  const gradient = functions.getColorGradient(
    buttonValues.length + 1,
    theme.accent1,
    theme.accent2
  );
  const handleUpdate = (i, multiplier, isCustom) => {
    setState({
      activeIndex: i,
      customMultiple: isCustom ? multiplier : "",
    });
    if (multiplier) {
      if (isCustom) multiplier = functions.roundToNearestHalf(multiplier);
      props.setIngredients(
        functions.multiplyIngredients(multiplier, props.ingredients),
        functions.multiplyYields(multiplier, props.yields)
      );
    }
  };
  let buttons = buttonValues.map((value, i) => {
    return (
      <NumberButton
        key={i}
        value={value}
        color={gradient[i]}
        isActive={i === state.activeIndex}
        onClick={() => handleUpdate(i, value, false)}
      />
    );
  });
  return (
    <MultiplierTrayDiv>
      {buttons}
      <NumberInput
        value={state.customMultiple}
        color={gradient[gradient.length - 1]}
        isActive={state.activeIndex === gradient.length - 1}
        onChange={(multiplier) =>
          handleUpdate(gradient.length - 1, multiplier, true)
        }
      />
    </MultiplierTrayDiv>
  );
};

const MultiplierTrayDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* gap: ${units.rem1}; */

  // box model
  margin-top: ${units.rem0};
  margin-left: -${units.rem0};

  // typography
  font-family: ${styles.fontFamily.monospace};
  font-weight: bold;
`;

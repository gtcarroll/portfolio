import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { JellyButton } from "./dependencies";

export const ButtonTray = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const { theme } = useContext(ThemeContext);
  return (
    <ButtonTrayContainer>
      {props.tertiary ? (
        <JellyButton
          text={props.tertiary.text}
          onClick={props.tertiary.onClick}
          flexGrow={props.tertiary.flexGrow}
          disabled={props.tertiary.disabled}
          failed={props.tertiary.failed}
          // color={theme.accent3}
          padding="right"
        />
      ) : (
        <JellyButton hidden disabled text="< prev" color="tertiary" />
      )}
      {props.secondary ? (
        <JellyButton
          text={props.secondary.text}
          onClick={props.secondary.onClick}
          flexGrow={props.secondary.flexGrow}
          disabled={props.secondary.disabled}
          solved={props.secondary.solved}
          // color={theme.accent2}
        />
      ) : (
        <JellyButton hidden disabled color="secondary" />
      )}
      {props.primary ? (
        <JellyButton
          text={props.primary.text}
          onClick={props.primary.onClick}
          flexGrow={props.primary.flexGrow}
          disabled={props.primary.disabled}
          // color={theme.accent1}
          padding="left"
        />
      ) : (
        <JellyButton hidden disabled text="next >" color="primary" />
      )}
    </ButtonTrayContainer>
  );
};

ButtonTray.defaultProps = {
  primary: false,
  secondary: false,
  tertiary: false,
};

const ButtonTrayContainer = styled.div`
  position: relative;
  z-index: 105;

  display: flex;
  flex-direction: row;
  flex: 1;

  width: 100%;
  height: 10rem;
`;

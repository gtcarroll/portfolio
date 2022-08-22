import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context";
import { JellyButton } from "./dependencies";

export const ButtonTray = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <ButtonTrayContainer>
      <JellyButton
        color={theme.accent3}
        text={"< prev"}
        isHidden={isPlaying}
        isLeft
      />
      <JellyButton
        color={theme.accent1}
        text={isPlaying ? "pause" : "play"}
        onClick={() => setIsPlaying(!isPlaying)}
        isBig
      />
      <JellyButton
        color={theme.accent2}
        text={"next >"}
        isHidden={isPlaying}
        isRight
      />
    </ButtonTrayContainer>
  );
};

ButtonTray.defaultProps = {
  primary: false,
  secondary: false,
  tertiary: false,
};

const ButtonTrayContainer = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  flex: 1;

  // position
  position: relative;

  // box model
  width: 100%;
`;

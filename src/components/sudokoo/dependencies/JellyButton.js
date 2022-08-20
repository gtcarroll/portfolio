import React from "react";
import styled from "styled-components";
import { styles } from "../../../context";

export const JellyButton = (props) => {
  return (
    <ButtonContainer
      style={{ flexGrow: props.flexGrow }}
      className={props.padding}
    >
      <Button
        style={{ color: props.color, borderColor: props.color }}
        className={
          (props.disabled ? "disabled " : "") +
          (props.solved ? "solved " : "") +
          (props.failed ? "failed " : "") +
          (props.hidden ? "hidden " : "") +
          props.padding
        }
        onClick={props.disabled ? null : props.onClick}
        tabIndex={props.disabled ? "-1" : "0"}
      >
        {props.text}
      </Button>
    </ButtonContainer>
  );
};

JellyButton.defaultProps = {
  onClick: null,
  text: "",
  color: "",
  flexGrow: 0,
  disabled: false,
  solved: false,
  hidden: false,
  padding: "",
};

const ButtonContainer = styled.div`
  transition: ${styles.transition.button};
  position: relative;
  display: flex;
  &.left {
    padding-left: 1rem;
  }
  &.right {
    padding-right: 1rem;
  }
`;

const Button = styled.button`
  transition: ${styles.transition.button};

  font-size: 1.5rem;
  padding: 0.4rem 0.4rem 0.8rem 0.4rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  &.right,
  &.left {
    width: calc(100% - 1rem);
  }

  border: 2px solid;
  border-radius: 2px;

  top: 7px;
  position: absolute;
  box-shadow: 0 0 0 0;

  background-color: transparent;

  @media (orientation: portrait) {
    &:not(.disabled) {
      top: 0px;
      box-shadow: 0 7px 0 0;
    }
  }

  &.hidden {
    border-color: transparent !important;
    color: transparent !important;
    flex-grow: 0;
  }

  &.solved,
  &.failed {
    padding: 0.5rem 0.4rem 0.7rem 0.4rem;
  }
`;

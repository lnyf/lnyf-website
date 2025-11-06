import React from "react";
import styled, { keyframes, css } from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  padding: 0;
  position: relative;
  height: 44px;
  width: 44px;
  border-radius: 14px;
  margin-right: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const AnimateState = {
  INITIAL: "Initial",
  OPEN: "Open",
  CLOSED: "Closed",
};

const Bar = styled.span`
  position: absolute;
  background: ${({ theme }) => theme.palette.font};
  left: 50%;
  height: 3px;
  width: 28px;
  margin-left: -14px;
  border-radius: 999px;
  transition: background 0.2s ease;
`;

const Bar1AnimationOpen = keyframes`
  0% {
    top: 14px;
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 22px;
    transform: rotate(45deg);
  }
`;
const Bar1AnimationClosed = keyframes`
  0% {
    top: 22px;
    transform: rotate(45deg);
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 14px;
  }
`;

const Bar1 = styled(Bar)`
  top: 14px;
  ${({ animate }) => {
    if (animate !== AnimateState.INITIAL) {
      if (animate === AnimateState.CLOSED) {
        return css`
          animation: ${Bar1AnimationClosed} 0.25s ease-in-out forwards;
        `;
      } else {
        return css`
          animation: ${Bar1AnimationOpen} 0.25s ease-in-out forwards;
        `;
      }
    }
  }}
`;

const Bar2AnimationOpen = keyframes`
  0% {
    top: 30px;
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 22px;
    transform: rotate(-45deg);
  }
`;

const Bar2AnimationClosed = keyframes`
  0% {
    top: 22px;
    transform: rotate(-45deg);
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 30px;
  }
`;

const Bar2 = styled(Bar)`
  top: 30px;
  ${({ animate }) => {
    if (animate !== AnimateState.INITIAL) {
      if (animate === AnimateState.CLOSED) {
        return css`
          animation: ${Bar2AnimationClosed} 0.25s ease-in-out forwards;
        `;
      } else {
        return css`
          animation: ${Bar2AnimationOpen} 0.25s ease-in-out forwards;
        `;
      }
    }
  }}
`;

const Menu = ({ onClick, animate }) => {
  return (
    <Wrapper aria-label="navigation" onClick={onClick}>
      <Bar1 animate={animate} />
      <Bar2 animate={animate} />
    </Wrapper>
  );
};

export default Menu;

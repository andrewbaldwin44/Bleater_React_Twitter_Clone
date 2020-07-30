import React from "react";
import styled, { keyframes } from "styled-components";

function Particle({ children, angle, distance }) {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const delay = angle > 150 ? '200ms' : 0;

  return <Wrapper x={x} y={y} delay={delay}>{children}</Wrapper>
}

const bubbling = props => keyframes`
  0% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0;
  }
  60% {
    transform: translate(${props.x}px, ${props.y}px) scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: translate(${props.x}px, ${props.y}px) scale(0);
    opacity: 1;
  },
`;

const Wrapper = styled.div`
  animation: ${bubbling} 700ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-delay: ${props => props.delay};
`;

export default Particle;

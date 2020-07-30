import React from "react";
import styled, { keyframes } from "styled-components";

function PoppingCircle({ color }) {
  return <Wrapper color={color} />
}

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${prop => prop.color};
  width: 100%;
  height: 100%;
  border-radius: 100%;
  animation: ${scale} 300ms forwards cubic-bezier(0,1.01,.27,1.01), ${fade} 500ms forwards;
`;

export default PoppingCircle;

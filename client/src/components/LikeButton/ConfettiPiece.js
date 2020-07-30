import React from "react";
import styled from "styled-components";

import Particle from './Particle';

function ConfettiPiece({ angle, distance, color }) {
  return (
    <Particle
      angle={angle}
      distance={distance}
    >
      <Circle color={color} />
    </Particle>
  )
}

const Circle = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: ${props => props.color};
  border-radius: 100%;
  color: purple;
  transform: translate(-50%, -50%);
`;

export default ConfettiPiece;

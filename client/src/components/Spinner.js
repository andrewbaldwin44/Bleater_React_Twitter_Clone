import React from 'react';
import styled, { keyframes } from "styled-components";

import SpinnerImage from "../assets/spinner.png";

function Spinner() {
  return (
      <SpinnerIcon src={SpinnerImage} />
  )
}

const Spin = keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  to {
     transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const SpinnerIcon = styled.img`
  height: 30px;
  width: auto;
  animation: ${Spin} 1s infinite linear;
`;

export default Spinner;

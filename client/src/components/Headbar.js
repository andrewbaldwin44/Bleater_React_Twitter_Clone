import React from "react";
import styled from "styled-components";

import { COLORS, PAGE_DIMENSIONS } from "../constants";

const { borderColor } = COLORS;
const { mainWidth, headerBottomMargin } = PAGE_DIMENSIONS;

function Headbar({ header }) {
  return (
    <HeadbarNav>
      <h2>{header}</h2>
      <span role="img" aria-label="emoji">✨</span>
    </HeadbarNav>
  );
}

const HeadbarNav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  font-family: inherit;
  height: 70px;
  width: calc(${mainWidth} - 2px);
  padding: 0 25px;
  margin-bottom: ${headerBottomMargin};
  border-bottom: 1px solid ${borderColor};
  background-color: white;
  z-index: 1000;

  h2 {
    display: inline;
  }

  span {
    font-size: 1.4em;
  }
`;


export default Headbar;

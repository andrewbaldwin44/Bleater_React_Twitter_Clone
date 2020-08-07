import React from "react";
import styled from "styled-components";

import ActionBar from "./ActionBar";
import { COLORS } from "../../constants";

const { borderColor } = COLORS;

function Footer() {
  return (
    <>
      <Divider />
      <ActionBar />
      <Divider />
    </>
  )
}

export const Divider = styled.div`
  height: 1px;
  background: ${borderColor};
`;

export default Footer;

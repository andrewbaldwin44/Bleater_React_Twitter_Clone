import React from "react";
import styled from "styled-components";

import ActionBar from "./ActionBar";
import Stat from "./Stat";
import { COLORS } from "../../constants";

const { borderColor } = COLORS;

function Footer() {
  return (
    <>
      <Divider />
      <Stat />
      <Divider />
      <ActionBar />
      <Divider />
    </>
  )
}

const Divider = styled.div`
  height: 1px;
  background: ${borderColor};
`;

export default Footer;

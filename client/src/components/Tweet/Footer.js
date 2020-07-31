import React from "react";
import styled from "styled-components";

import ActionBar from "./ActionBar";
import Stat from "./Stat";

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
  background: rgb(230, 236, 240);
`;

export default Footer;

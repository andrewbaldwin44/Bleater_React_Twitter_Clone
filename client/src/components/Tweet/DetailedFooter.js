import React from "react";
import styled from "styled-components";

import ActionBar from "./ActionBar";
import Stat from "./Stat";
import { Divider } from "./Footer";
import { COLORS } from "../../constants";

function DetailedFooter() {
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

export default DetailedFooter

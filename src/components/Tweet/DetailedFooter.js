import React from "react";

import DetailedActionBar from "./DetailedActionBar";
import Stat from "./Stat";
import { Divider } from "./Footer";

function DetailedFooter() {
  return (
    <>
      <Divider />
      <Stat />
      <Divider />
      <DetailedActionBar />
      <Divider />
    </>
  )
}

export default DetailedFooter

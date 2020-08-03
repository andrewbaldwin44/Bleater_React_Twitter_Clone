import React from "react";

import Reply from "./Reply";
import Retweet from "./Retweet";
import Like from "./Like";
import Share from "./Share";
import { Wrapper } from "./ActionBar";

const DetailedActionBar = () => {
  return (
    <Wrapper>
      <Reply />
      <Retweet />
      <Like />
      <Share />
    </Wrapper>
  );
};

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   height: 48px;
// `;

export default DetailedActionBar;

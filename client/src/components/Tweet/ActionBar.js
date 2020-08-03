import React, { useContext } from "react";
import styled from "styled-components";

import Reply from "./Reply";
import Retweet from "./Retweet";
import Like from "./Like";
import Share from "./Share";

const ActionBar = () => {
  return (
    <Wrapper>
      <Reply />
      <Retweet />
      <Like />
      <Share />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;

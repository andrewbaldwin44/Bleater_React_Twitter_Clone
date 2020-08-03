import React, { useContext } from "react";
import styled from "styled-components";

import Reply from "./Reply";
import Retweet from "./Retweet";
import Like from "./Like";
import Share from "./Share";

import { TweetContext } from "./TweetContext";

const ActionBar = () => {
  const {
    likes,
    retweets
  } = useContext(TweetContext);

  return (
    <Wrapper>
      <Reply />
      <div>
        <Retweet />
        <RetweetCounter>{likes}</RetweetCounter>
      </div>
      <Like />
      <LikeCounter>{retweets}</LikeCounter>
      <Share />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

const RetweetCounter = styled.span`
  color: black;
`;

const LikeCounter = styled.span`
  color: black;
`;

export default ActionBar;

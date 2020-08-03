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
      <CounterContainer>
        <Retweet />
        {retweets > 0 && (
          <Counter>{retweets}</Counter>
        )}
      </CounterContainer>
      <CounterContainer>
        <Like />
        {likes > 0 && (
          <Counter>{likes}</Counter>
        )}
      </CounterContainer>
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

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
`;

const Counter = styled.span`
  padding-left: 5px;
`;

export default ActionBar;

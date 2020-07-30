import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from './TweetContext';

function Stat() {
  const { likes, retweets } = useContext(TweetContext);

  return (
    <StatsContainer>
      <Bold>{retweets} <Light>Retweets</Light></Bold>
      <Bold>{likes} <Light>Likes</Light></Bold>
    </StatsContainer>
  )
}

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 30%;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Light = styled.span`
  color: rgb(101, 119, 134);
  font-size: 16px;
  font-weight: normal;
`;

export default Stat;

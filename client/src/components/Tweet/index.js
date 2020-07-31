import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import Stat from "./Stat";
import { TweetContext } from './TweetContext';

const Tweet = () => {
  const {
    tweetID,
    tweetContents,
    date,
    tweetMedia
  } = useContext(TweetContext);

  console.log(tweetMedia)

  return (
    <Wrapper >
      <Header />
      <TweetContents>{tweetContents}</TweetContents>
      {tweetMedia && (
        <TweetMediaContainer>
          <TweetMedia src={tweetMedia} />
        </TweetMediaContainer>
      )}
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stat />
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const TweetMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`;

const TweetMedia = styled.img`
  max-width: 100%;
  border-radius: 20px;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default Tweet;

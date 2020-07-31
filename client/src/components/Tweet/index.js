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
    avatarSrc,
    tweetMedia
  } = useContext(TweetContext);

  console.log(tweetMedia)

  return (
    <Wrapper >
      <Avatar src={avatarSrc} />
      <Contents>
        <Header />
        <TweetContents>{tweetContents}</TweetContents>
        {tweetMedia && (
          <TweetMediaContainer>
            <TweetMedia src={tweetMedia} />
          </TweetMediaContainer>
        )}
        <Divider />
        <Stat />
        <Divider />
        <ActionBar />
        <Divider />
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const Contents = styled.div`

`;

const Avatar = styled.img`
  min-width: 48px;
  height: 48px;
  margin-right: 50px;
  border-radius: 50%;
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

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default Tweet;

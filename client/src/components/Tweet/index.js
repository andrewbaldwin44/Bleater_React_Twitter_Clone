import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { TweetContext } from './TweetContext';

const Tweet = () => {
  const {
    tweetContents,
    avatarSrc,
    tweetMedia
  } = useContext(TweetContext);

  return (
    <Wrapper >
      <Avatar src={avatarSrc} />
      <div>
        <Header />
        <TweetContents>{tweetContents}</TweetContents>
        {tweetMedia && (
          <TweetMediaContainer>
            <TweetMedia src={tweetMedia} />
          </TweetMediaContainer>
        )}
        <Footer />
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

export const Avatar = styled.img`
  min-width: 48px;
  height: 48px;
  margin-right: 50px;
  border-radius: 50%;
`;

export const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

export const TweetMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const TweetMedia = styled.img`
  max-width: 100%;
  border-radius: 20px;
`;

export default Tweet;

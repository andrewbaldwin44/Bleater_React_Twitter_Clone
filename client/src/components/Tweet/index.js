import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { TweetContext } from './TweetContext';

import Retweet from "./Retweet";

const Tweet = () => {
  const { avatarSrc, isRetweeted, tweetID } = useContext(TweetContext);
  const history = useHistory();

  const navigateToTweet = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      history.push(`/tweet/${tweetID}`);
    }
  }

  return (
    <Wrapper
      tabIndex="0"
      aria-label="View Tweet"
      onKeyDown={navigateToTweet}
    >
      <Avatar src={avatarSrc} />
      <Content>
        {isRetweeted && (
          <RetweetLabel>
            <Retweet />
            <span>Rebleated</span>
          </RetweetLabel>
        )}
        <Header />
        <Body />
        <Footer />
      </Content>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const Content = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  max-width: 48px;
  min-width: 48px;
  height: 48px;
  margin-right: 50px;
  border-radius: 50%;
`;

const RetweetLabel = styled.div`
  display: flex;
  align-items: center;
`;

export default Tweet;

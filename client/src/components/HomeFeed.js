import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import useFetch from '../hooks/useFetch.hook';
import moment from 'moment';
import styled from "styled-components";

import Tweet from './Tweet/index';
import { TweetProvider } from './Tweet/TweetContext';
import { HeadbarContext } from "./Headbar/HeadbarContext";
import Spinner from './Spinner';

function HomeFeed() {
  const [homeFeed, setHomeFeed] = useState(null);
  const [status, setStatus] = useState("loading");
  const history = useHistory();

  const sendToTweet = tweetID => {
    history.push(`/tweet/${tweetID}`);
  }

  const { setHeader } = useContext(HeadbarContext);
  setHeader('Home');

  useFetch('/api/me/home-feed', data => {
    setHomeFeed(data);
    setStatus('idle');
  });

  if (status === 'idle') {
    const { tweetIds, tweetsById } = homeFeed;

    return (
      <Tweets>
        {tweetIds.map(tweetID => {
          const tweet = tweetsById[tweetID];
          const { timestamp } = tweetsById[tweetID];
          const date = moment(timestamp).format("• MMM Do");

          return (
            <TweetContainer onClick={() => sendToTweet(tweetID)} key={tweetID} >
              <TweetProvider
                id={tweetID}
                tweet={tweet}
                date={date}
              >
                  <Tweet />
              </TweetProvider>
            </TweetContainer>
          )
        })}
      </Tweets>
    )
  }
  else {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }
}

const Tweets = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetContainer = styled.div`
  cursor: pointer;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
`;

export default HomeFeed;

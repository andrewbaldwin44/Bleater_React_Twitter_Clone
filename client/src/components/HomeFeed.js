import React, { useContext, useState } from 'react';
import Tweet from './Tweet/index';
import useFetch from '../hooks/useFetch.hook';
import { TweetProvider } from './Tweet/TweetContext';
import { HeadbarContext } from "./Headbar/HeadbarContext";
import { Link } from "react-router-dom";
import Spinner from './Spinner';
import styled from "styled-components";

function HomeFeed() {
  const [homeFeed, setHomeFeed] = useState(null);
  const [status, setStatus] = useState("loading");

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
          return (
            <TweetContainer to={`/tweet/${tweetID}`} key={tweetID} >
              <TweetProvider
                id={tweetID}
                tweet={tweetsById[tweetID]}
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

const TweetContainer = styled(Link)`
  cursor: pointer;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
`;

export default HomeFeed;

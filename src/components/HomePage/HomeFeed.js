import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch.hook";
import moment from 'moment';
import styled from "styled-components";

import WriteTweet from "./WriteTweet";
import Tweet from '../Tweet/index';
import { TweetProvider } from '../Tweet/TweetContext';

import Spinner from '../Spinner';
import Error from "../Error";

function HomeFeed({ setHeader }) {
  const [homeFeed, setHomeFeed] = useState(null);
  const [status, setStatus] = useState("loading");
  const [newTweet, setNewTweet] = useState(null);
  const [newTweetStatus, setNewTweetStatus] = useState('idle');
  const history = useHistory();

  const sendToTweet = tweetID => {
    history.push(`/tweet/${tweetID}`);
  }

  useEffect(() => {
    setHeader('Home');
  });

  useFetch('/api/me/home-feed', data => {
    setHomeFeed(data);
    setStatus('idle');
    setNewTweetStatus('idle');
  }, setStatus, newTweet);

  if (status === 'idle') {
    const { tweetIds, tweetsById } = homeFeed;

    return (
      <>
        <WriteTweet
          setNewTweet={setNewTweet}
          newTweetStatus={newTweetStatus}
          setNewTweetStatus={setNewTweetStatus}
        />
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
      </>
    )
  }
  else if (status === 'loading') {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }
  else {
    return (
      <Error/>
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

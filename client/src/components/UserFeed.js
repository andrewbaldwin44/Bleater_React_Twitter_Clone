import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.hook';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

import Tweet from './Tweet/index';
import { TweetProvider } from './Tweet/TweetContext';
import Spinner from "./Spinner";
import { SpinnerContainer } from "./HomeFeed";

function UserFeed() {
  const { tweetID } = useParams();
  console.log(tweetID)

  const [userFeed, setUserFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  useFetch(`/api/${tweetID}/feed`, data => {
    setUserFeed(data);
    setStatus('idle');
  });

  if (status === 'idle') {
    const { tweetIds, tweetsById } = userFeed;
    console.log(userFeed)

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

export default UserFeed;

import React, { useState } from 'react';
import useFetch from "../../hooks/useFetch.hook";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

import Tweet from '../Tweet/index';
import { TweetProvider } from '../Tweet/TweetContext';
import Spinner from "../Spinner";
import { SpinnerContainer } from "../HomePage/HomeFeed";

function UserFeed() {
  const { profileID } = useParams();

  const [userFeed, setUserFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  useFetch(`/api/${profileID}/feed`, data => {
    setUserFeed(data);
    setStatus('idle');
  }, setStatus);

  if (status === 'idle') {
    const { tweetIds, tweetsById } = userFeed;

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
  else if (status === 'loading') {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }
  else {
    return (
      <div>
          Error!
      </div>
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

import React, { useContext, useEffect } from 'react';
import moment from 'moment';

import useFetch from '../hooks/useFetch.hook';
import { useParams } from 'react-router-dom';

import DetailedHeader from "./Tweet/DetailedHeader";
import Body from "./Tweet/Body";
import DetailedFooter from "./Tweet/DetailedFooter";
import { TweetProvider } from './Tweet/TweetContext';
import Spinner from './Spinner';
import { SpinnerContainer } from './HomeFeed';
import { COLORS } from "../constants";

import styled from 'styled-components';

const { lightText } = COLORS;

function TweetDetails({ setHeader }) {
  const { tweetID } = useParams();

  const [tweet, setTweet] = React.useState(null);
  const [fetchStatus, setFetchStatus] = React.useState("loading");

  useFetch(`/api/tweet/${tweetID}`, data => {
    setTweet(data.tweet);
    setFetchStatus('idle');
  });

  if (fetchStatus === 'idle') {
    setHeader('Tweet');
    const { timestamp } = tweet;

    const date = moment(timestamp).format("LT - MMM Do, YYYY");

    return (
      <Wrapper>
        <TweetProvider
          key={tweetID}
          tweet={tweet}
        >
          <DetailedHeader />
          <Body />
          <Timestamp>{date}</Timestamp>
          <DetailedFooter />
        </TweetProvider>
      </Wrapper>
    );
  }
  else {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }
}

const Wrapper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
  padding: 16px;
`;

const Timestamp = styled.div`
  color: ${lightText};
  padding-bottom: 10px;
  padding-left: 5px;
`;


export default TweetDetails;

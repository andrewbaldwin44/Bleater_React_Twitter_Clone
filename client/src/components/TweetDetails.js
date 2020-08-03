import React, { useContext } from 'react';
import moment from 'moment';

import useFetch from '../hooks/useFetch.hook';
import { useParams } from 'react-router-dom';

import Footer from "./Tweet/Footer";
import { TweetContents } from "./Tweet/index";
import { Wrapper as UserInfo } from "./Tweet/Header";
import { DisplayName } from "./Tweet/Header";
import { Username } from "./Tweet/Header";
import { TweetMediaContainer } from "./Tweet/index";
import { TweetMedia } from "./Tweet/index";
import { TweetProvider } from './Tweet/TweetContext';
import { HeadbarContext } from "./Headbar/HeadbarContext";
import Spinner from './Spinner';
import { SpinnerContainer } from './HomeFeed';
import { COLORS } from "../constants";

import styled from 'styled-components';

const { lightText } = COLORS;

function TweetDetails() {
  const { tweetID } = useParams();

  const [tweet, setTweet] = React.useState(null);
  const [fetchStatus, setFetchStatus] = React.useState("loading");

  const { setHeader } = useContext(HeadbarContext);
  setHeader('Tweet');

  useFetch(`/api/tweet/${tweetID}`, data => {
    setTweet(data.tweet);
    setFetchStatus('idle');
  });

  if (fetchStatus === 'idle') {
    const {
      displayName,
      handle,
      avatarSrc
    } = tweet.author;

    const {
      status,
      isLiked,
      isRetweeted,
      numLikes,
      numRetweets,
      timestamp
    } = tweet;

    const date = moment(timestamp).format("LT - MMM Do, YYYY");
    const media = tweet.media[0];

    let url = media !== undefined;
    if (media) url = media.url;

    return (
      <Wrapper>
        <TweetProvider
          key={tweetID}
          displayName={displayName}
          handle={handle}
          avatarSrc={avatarSrc}
          tweetContent={status}
          timestamp={timestamp}
          istweetLiked={isLiked}
          istweetRetweeted={isRetweeted}
          numberLikes={numLikes}
          numberRetweets={numRetweets}
        >
          <UserInfo>
            <Avatar src={avatarSrc} />
            <Name>
              <DisplayName>{displayName}</DisplayName>
              <Username>@{handle}</Username>
            </Name>
          </UserInfo>
          <TweetContents>{status}</TweetContents>
          {media && (
            <TweetMediaContainer>
              <TweetMedia src={url} />
            </TweetMediaContainer>
          )}
          <Timestamp>{date}</Timestamp>
          <Footer />
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

export const Avatar = styled.img`
  min-width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Timestamp = styled.div`
  color: ${lightText};
  padding-bottom: 10px;
  padding-left: 5px;
`;


export default TweetDetails;

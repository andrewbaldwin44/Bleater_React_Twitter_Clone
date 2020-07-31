import React from 'react';
import useFetch from '../hooks/useFetch.hook';
import Tweet from './Tweet/index';
import { useParams } from 'react-router-dom';
import { TweetProvider } from './Tweet/TweetContext';
import styled from 'styled-components';

function TweetDetails() {
  const { tweetID } = useParams();

  const [tweet, setTweet] = React.useState(null);
  const [fetchStatus, setFetchStatus] = React.useState("loading");

  useFetch(`/api/tweet/${tweetID}`, data => {
    console.log(data);
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

    return (
      <TweetProvider
        key={tweetID}
        displayName={displayName}
        handle={handle}
        avatarSrc={avatarSrc}
        tweetContent={status}
        timestamp={timestamp}
        isTweetLiked={isLiked}
        isTweetRetweeted={isRetweeted}
        numberLikes={numLikes}
        numberRetweets={numRetweets}
      >
        <Tweet />
      </TweetProvider>
    );
  }
  else {
    return (
      <div>Loading</div>
    )
  }
}

export default TweetDetails;

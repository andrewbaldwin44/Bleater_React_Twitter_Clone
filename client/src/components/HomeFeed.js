import React, { useEffect } from 'react';
import Tweet from './Tweet/index';
import useFetch from '../hooks/useFetch.hook';
import { TweetProvider } from './Tweet/TweetContext';
import { Link } from "react-router-dom";
import styled from "styled-components";

function HomeFeed() {
  const [homeFeed, setHomeFeed] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  useFetch('/api/me/home-feed', data => {
    setHomeFeed(data);
    setStatus('idle');
  });

  if (status === 'idle') {
    const { tweetIds, tweetsById } = homeFeed;

    console.log(tweetsById)

    return (
      <Tweets>
        {tweetIds.map(tweetID => {
          const {
            displayName,
            handle,
            avatarSrc
          } = tweetsById[tweetID].author;

          const {
            status,
            isLiked,
            isRetweeted,
            numLikes,
            numRetweets,
            timestamp
          } = tweetsById[tweetID];

          const media = tweetsById[tweetID].media[0];

          let url = media !== undefined;
          if (media) url = media.url;

          console.log(url)

          return (
            <TweetContainer to={`/tweet/${tweetID}`} key={tweetID} >
              <TweetProvider
                id={tweetID}
                displayName={displayName}
                handle={handle}
                avatarSrc={avatarSrc}
                tweetContent={status}
                timestamp={timestamp}
                isTweetLiked={isLiked}
                isTweetRetweeted={isRetweeted}
                numberLikes={numLikes}
                numberRetweets={numRetweets}
                tweetMedia={url}
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
    return (<div>Loading</div>)
  }
}

const Tweets = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetContainer = styled(Link)`
  cursor: pointer;
`;

export default HomeFeed;

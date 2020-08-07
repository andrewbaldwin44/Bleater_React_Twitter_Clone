import React, { createContext, useState, useEffect } from "react";

export const TweetContext = createContext(null);

export function TweetProvider({ children, id, tweet, date }) {
  const {
    displayName,
    handle,
    avatarSrc
  } = tweet.author;

  const {
    status,
    isLiked: isTweetLiked,
    isRetweeted: isTweetRetweeted,
    numLikes,
    numRetweets
  } = tweet;

  const media = tweet.media[0];

  let tweetMedia = media !== undefined;
  if (media) tweetMedia = media.url;

  const [likes, setLikes] = useState(numLikes);
  const [retweets, setRetweets] = useState(numRetweets);
  const [isLiked, setIsLiked] = useState(isTweetLiked);
  const [isRetweeted, setIsRetweeted] = useState(isTweetRetweeted);

  const tweetLikedBody = {
    method: 'PUT',
    body: JSON.stringify({ like: isLiked }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }

  useEffect(() => {
    fetch(`/api/tweet/${id}/like`, tweetLikedBody);
  });

  const handleToggleLiked = event => {
    event.preventDefault();
    event.stopPropagation();

    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  }

  const handleToggleRetweet = event => {
    event.preventDefault();
    event.stopPropagation();

    isRetweeted ? setRetweets(retweets - 1) : setRetweets(retweets + 1);
    setIsRetweeted(!isRetweeted);
  }

  return (
    <TweetContext.Provider
      value={{
        tweetID: id,
        tweetContents: status,
        displayName: displayName,
        handle,
        isLiked: isLiked,
        isRetweeted: isRetweeted,
        likes,
        retweets,
        handleToggleLiked,
        handleToggleRetweet,
        avatarSrc,
        date,
        tweetMedia
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}

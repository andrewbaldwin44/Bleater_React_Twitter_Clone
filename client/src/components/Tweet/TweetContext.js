import React, { createContext, useState } from "react";

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

  const handleToggleLiked = event => {
    event.preventDefault()
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  }

  const handleToggleRetweet = event => {
    event.preventDefault()
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
        isLikedByCurrentUser: isLiked,
        isRetweetedByCurrentUser: isRetweeted,
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

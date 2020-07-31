import React, { createContext, useState } from "react";
import moment from 'moment';

export const TweetContext = createContext(null);

export function TweetProvider({
    id, children, displayName, handle, avatarSrc, tweetContent,
    timestamp, isTweetLiked, isTweetRetweeted, numberLikes, numberRetweets
  }) {

  const [likes, setLikes] = useState(numberLikes);
  const [retweets, setRetweets] = useState(numberRetweets);
  const [isLiked, setIsLiked] = useState(isTweetLiked);
  const [isRetweeted, setIsRetweeted] = useState(isTweetRetweeted);

  const handleToggleLiked = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  }

  const handleToggleRetweet = () => {
    isRetweeted ? setRetweets(retweets - 1) : setRetweets(retweets + 1);
    setIsRetweeted(!isRetweeted);
  }

  console.log(id)
  return (
    <TweetContext.Provider
      value={{
        tweetID: id,
        tweetContents: tweetContent,
        displayName: `${displayName} ✨`,
        username: handle,
        isLikedByCurrentUser: isLiked,
        isRetweetedByCurrentUser: isRetweeted,
        likes,
        retweets,
        handleToggleLiked,
        handleToggleRetweet,
        avatarSrc,
        date: moment(timestamp).format("LT - MMM Do, YYYY")
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}

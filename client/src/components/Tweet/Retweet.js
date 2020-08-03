import React, { useContext } from "react";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

import { TweetContext } from './TweetContext';

function Retweet() {
  const {
    isRetweetedByCurrentUser,
    handleToggleRetweet
  } = useContext(TweetContext);

  return (
    <Action
      color="rgb(23, 191, 99)"
      size={40}
      onClick={handleToggleRetweet}
    >
      <TweetActionIcon
        kind="retweet"
        color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
      />
    </Action>
  )
}

export default Retweet;

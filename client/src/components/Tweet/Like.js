import React, { useContext } from "react";
import Action from "./Action";

import LikeButton from "../LikeButton";
import { TweetContext } from './TweetContext';

function Retweet() {
  const {
    handleToggleLiked,
  } = useContext(TweetContext);

  return (
    <Action
      color="rgb(224, 36, 94)"
      size={40}
      onClick={handleToggleLiked}
    >
      <LikeButton />
    </Action>
  )
}

export default Retweet;

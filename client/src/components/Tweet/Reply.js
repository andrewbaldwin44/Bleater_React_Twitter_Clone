import React from "react";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

function Reply() {
  return (
    <Action
      color="rgb(27, 149, 224)"
      size={40}
      onClick={event => event.stopPropagation()}
    >
      <TweetActionIcon kind="reply" />
    </Action>
  )
}

export default Reply;

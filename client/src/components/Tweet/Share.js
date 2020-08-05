import React from "react";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

function Share() {
  return (
    <Action
      color="rgb(27, 149, 224)"
      size={40}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <TweetActionIcon kind="share" />
    </Action>
  )
}

export default Share;

import React, { useContext, useState, useEffect, createRef } from 'react';
import styled from "styled-components";

import { Wrapper, Avatar } from "../Tweet/index";
import { COLORS, RULES } from "../../constants";

import { CurrentUserContext } from "../CurrentUserContext";

const { primaryDarkRed, borderColor, lightText } = COLORS;
const { characterMax } = RULES;

function WriteTweet() {
  const { currentUser } = useContext(CurrentUserContext);
  const [remainingCharacters, setRemainingCharacters] = useState(characterMax);
  const [tweetContent, setTweetContent] = useState(null);

  const textInput = createRef();

  const {
    avatarSrc
  } = currentUser;

  const handleInput = event => {
    const characterAmount = event.target.value.length;
    setRemainingCharacters(characterMax - characterAmount);
  }

  const handleClick = event => {
    const tweetMessage = textInput.current.value;

    const tweetData = {
      method: 'POST',
      body: JSON.stringify({ status: tweetMessage }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }

    setTweetContent(tweetData)
  }

  useEffect(() => {
    if (tweetContent) {
      fetch(`/api/tweet/`, tweetContent)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    }
  }, [tweetContent]);

  return (
    <TextBoxContainer >
      <Avatar src={avatarSrc} />
      <TextBox
        ref={textInput}
        placeholder="What's happening?"
        onInput={handleInput}
      >
      </TextBox>
      <CharacterCount>{remainingCharacters}</CharacterCount>
      <Post onClick={handleClick}>Bleat</Post>
    </TextBoxContainer>
  )
}

const TextBoxContainer = styled(Wrapper)`
  position: relative;
  border-bottom: 10px solid ${borderColor};
  padding-top: 0;
`;

const TextBox = styled.textarea`
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  height: 200px;
  border: none;
  resize: none;
  margin-top: 10px;
`;

const CharacterCount = styled.span`
  position: absolute;
  color: ${lightText};
  right: 125px;
  bottom: 20px;
`;

const Post = styled.button`
  position: absolute;
  font-weight: bold;
  font-size: inherit;
  font-family: inherit;
  color: white;
  background-color: ${primaryDarkRed};
  border: none;
  border-radius: 20px;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

export default WriteTweet;

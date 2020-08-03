import React, { useContext } from 'react';
import styled from "styled-components";

import { Wrapper, Avatar } from "../Tweet/index";
import { COLORS } from "../../constants";

import { CurrentUserContext } from "../CurrentUserContext";

const { primaryDarkRed, borderColor, lightText } = COLORS;

function WriteTweet() {
  const { currentUser } = useContext(CurrentUserContext);

  const {
    avatarSrc
  } = currentUser;

  return (
    <TextBoxContainer >
      <Avatar src={avatarSrc} />
      <TextBox placeholder="What's happening?" >
      </TextBox>
      <CharacterCount>280</CharacterCount>
      <Post>Bleat</Post>
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

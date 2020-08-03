import React, { useContext } from "react";
import styled from 'styled-components';

import { TweetContext } from './TweetContext';

import { Wrapper as UserInfo } from "./Header";
import { Username, DisplayName } from "./Header";

function DetailedHeader() {
  const {
    avatarSrc,
    displayName,
    handle,
  } = useContext(TweetContext);

  return (
    <UserInfo>
      <Avatar src={avatarSrc} />
      <Name>
        <DisplayName
          to={`/users/${handle}`}
          className='displayName'
        >
          {displayName}
        </DisplayName>
        <Username>@{handle}</Username>
      </Name>
    </UserInfo>
  )
}

export const Avatar = styled.img`
  min-width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .displayName {
    font-size: 20px;
  }
`;

export default DetailedHeader;

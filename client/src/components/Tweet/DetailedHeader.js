import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { TweetContext } from './TweetContext';

import { Wrapper as UserInfo } from "./Header";
import { Username } from "./Header";

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
          tabIndex="0"
          aria-label="View User Profile"
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

const DisplayName = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  padding-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default DetailedHeader;

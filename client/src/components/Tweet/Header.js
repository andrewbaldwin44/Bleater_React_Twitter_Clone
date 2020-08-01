import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from './TweetContext';
import { COLORS } from "../../constants";

const { lightText } = COLORS;

const Header = () => {
  const {
    displayName,
    username,
    date,
  } = useContext(TweetContext);


  return (
    <Wrapper>
      <Name>
        <DisplayName>{displayName}</DisplayName>
        <Username>@{username}</Username>
        <Timestamp>{date}</Timestamp>
      </Name>
    </Wrapper>
  );
};

export const Wrapper = styled.header`
  display: flex;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisplayName = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  padding-right: 10px;
`;

export const Username = styled.span`
  font-size: 15px;
  line-height: 20px;
  padding-right: 10px;
  color: ${lightText};
`;

const Timestamp = styled.div`
  color: ${lightText};
  font-size: 15px;
`;

export default Header;

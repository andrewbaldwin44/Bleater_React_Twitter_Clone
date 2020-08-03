import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { TweetContext } from './TweetContext';
import { COLORS } from "../../constants";

const { lightText } = COLORS;

const Header = () => {
  const {
    displayName,
    handle,
    date,
  } = useContext(TweetContext);

  const history = useHistory();

  const sendToUser = (event, handle) => {
    event.stopPropagation();
    history.push(`/users/${handle}`);
  }

  return (
    <Wrapper>
      <Name>
        <DisplayName
          onClick={event => sendToUser(event, handle)}
        >
          {displayName}
        </DisplayName>
        <Username>@{handle}</Username>
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

  &:hover {
    text-decoration: underline;
  }
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

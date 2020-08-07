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

  const sendToUser = event => {
    event.stopPropagation();
    event.preventDefault();
    history.push(`/users/${handle}`);
  }

  const handleKeyNaviagation = event => {
    if (event.key === 'Enter') {
      sendToUser(event);
    }
  }

  return (
    <Wrapper>
      <Name>
        <DisplayName
          onClick={sendToUser}
          tabIndex="0"
          aria-label="View User Profile"
          onKeyDown={handleKeyNaviagation}
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

const DisplayName = styled.span`
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

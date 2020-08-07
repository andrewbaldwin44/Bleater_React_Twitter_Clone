import React, { useContext } from "react";
import styled from "styled-components";

import { ProfileContext } from "./ProfileContext";
import { BsBell } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { COLORS } from "../../constants";

const { primaryDarkRed } = COLORS;

const ActionBar = () => {
  const { isBeingFollowedByYou } = useContext(ProfileContext);

  return (
    <Wrapper>
      <Ellipsis>
        <Dot />
        <Dot />
        <Dot />
      </Ellipsis>
      <IconContainer>
        <FiMail className="icon" />
      </IconContainer>
      <IconContainer>
        <BsBell className="icon" />
      </IconContainer>
      <FollowButton>
        {isBeingFollowedByYou ? 'Following' : 'Follow'}
      </FollowButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  width: 350px;
  margin: 5px;

  .icon {
    font-size: 30px;
    color: ${primaryDarkRed};
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid ${primaryDarkRed};
  cursor: pointer;
`;

const Ellipsis = styled(IconContainer)`
  justify-content: space-evenly;
  padding: 0 5px;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 2px solid ${primaryDarkRed};
`;

const FollowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.4em;
  width: 130px;
  height: 50px;
  background-color: ${primaryDarkRed};
  border-radius: 15px;
  cursor: pointer;
`;

export default ActionBar;

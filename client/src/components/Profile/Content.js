import React, { useContext } from "react";
import styled from "styled-components";

import Stat from "./Stat";

import { GrLocation } from "react-icons/gr";
import { BsLink45Deg, BsCalendar } from "react-icons/bs";

import { ProfileContext } from "./ProfileContext";

import { PAGE_DIMENSIONS, COLORS } from "../../constants";

const { lightText } = COLORS;
const { textOffset } = PAGE_DIMENSIONS;

function Content() {
  const {
    bio,
    location,
    url,
    joinedDate,
  } = useContext(ProfileContext);

  return (
    <ContentContainer>
      <p>{bio}</p>
      <Information>
        {location && (
          <div>
            <GrLocation className="icon" />
            <span>{location.toUpperCase()}</span>
          </div>
        )}
        {url && (
          <div>
            <BsLink45Deg className="icon" />
            <span>{url}</span>
          </div>
        )}
        <div>
          <BsCalendar />
          <span>Joined on {joinedDate}</span>
        </div>
      </Information>
      <Stat />
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  padding-left: ${textOffset};
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 5px;
    color: ${lightText}
  }

  .icon {
    font-weight: bold;
    font-size: 20px;
  }
`;

export default Content

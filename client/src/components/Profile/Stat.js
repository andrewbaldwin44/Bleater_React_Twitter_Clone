import React, { useContext } from "react";
import styled from "styled-components";

import { ProfileContext } from "./ProfileContext";

import { COLORS } from "../../constants";

const { lightText } = COLORS;

function Stat() {
  const {
    numFollowing,
    numFollowers,
    numLikes
  } = useContext(ProfileContext);

  return (
    <StatBar>
      <div>
        <Bold>{numFollowing}</Bold>
        <Light>Following</Light>
      </div>
      <div>
        <Bold>{numFollowers}</Bold>
        <Light>Followers</Light>
      </div>
    </StatBar>
  )
}

const StatBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
`;

const Bold = styled.span`
  font-weight: bold;
  padding-right: 10px;
`;

const Light = styled.span`
  color: ${lightText};
`;

export default Stat;

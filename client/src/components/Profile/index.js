import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import { ProfileProvider } from "./ProfileContext";
import ActionBar from "./ActionBar";
import Content from "./Content";
import NavBar from "./NavBar";

import Error from "../Error";
import Spinner from '../Spinner';
import { SpinnerContainer } from '../HomePage/HomeFeed';

import { PAGE_DIMENSIONS, COLORS } from "../../constants";

const { lightText } = COLORS;
const { headerBottomMargin, textOffset } = PAGE_DIMENSIONS;

function Profile({ setHeader }) {
  const { profileID } = useParams();

  const [currentProfile, setCurrentProfile] = useState(null);
  const [status, setStatus] = useState("loading");

  const updateProfile = data => {
    setCurrentProfile(data.profile);
    setStatus('idle');
  }

  useEffect(() => {
    fetch(`/api/${profileID}/profile`)
        .then(response => response.json())
        .then(updateProfile)
        .catch(error => setStatus('error'));
  }, [profileID]);

  useEffect(() => {
    if (status === 'idle') {
      const { displayName } = currentProfile;
      setHeader(displayName);
    }
  });

  if (status === 'idle') {
    const {
      bannerSrc,
      avatarSrc,
      displayName,
      handle,
      isFollowingYou
    } = currentProfile;

    return (
      <ProfileProvider
        currentProfile={currentProfile}
      >
        <Banner src={bannerSrc} />
        <Header>
          <Avatar src={avatarSrc} />
          <ActionBar />
        </Header>
        <Name>
          <h2>{displayName}</h2>
          <Details>
            <Handle>@{handle}</Handle>
            {isFollowingYou && (
              <Label>Follows You</Label>
            )}
          </Details>
        </Name>
        <Content />
        <NavBar />
      </ProfileProvider>
    )
  }
  else if (status === 'laoding') {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }
  else {
    return (
      <Error/>
    )
  }
}

const Banner = styled.img`
  width: 100%;
  height: 250px;
  margin-top: -${headerBottomMargin};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.img`
  height: 160px;
  width: 160px;
  margin-left: 25px;
  margin-top: -90px;
  border: 6px solid white;
  border-radius: 50%;
`;

const Name = styled.div`
  margin-left: ${textOffset};
  margin-top: 5px;
`;

const Handle = styled.h3`
  font-weight: 200;
  color: ${lightText};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: #eeeeee;
`;

export default Profile;

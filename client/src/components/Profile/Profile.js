import React, { useState } from "react";
import useFetch from '../../hooks/useFetch.hook';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import { ProfileProvider } from "./ProfileContext";
import ActionBar from "./ActionBar";
import Content from "./Content";
import NavBar from "./NavBar";

import Spinner from '../Spinner';
import { SpinnerContainer } from '../HomeFeed';

import { PAGE_DIMENSIONS, COLORS } from "../../constants";

const { lightText } = COLORS;
const { headerBottomMargin, textOffset } = PAGE_DIMENSIONS;

function Profile() {
  const { profileID } = useParams();

  const [currentProfile, setCurrentProfile] = useState(null);
  const [status, setStatus] = useState("loading");

  useFetch(`/api/${profileID}/profile`, data => {
    setCurrentProfile(data.profile);
    setStatus('idle');
  });

  if (status === 'idle') {
    const {
      bannerSrc,
      avatarSrc,
      displayName,
      handle
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
          <Handle>@{handle}</Handle>
        </Name>
        <Content />
        <NavBar />
      </ProfileProvider>
    )
  }
  else {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
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

export default Profile;

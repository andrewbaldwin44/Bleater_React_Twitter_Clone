import React, { createContext } from "react";
import moment from 'moment';

export const ProfileContext = createContext(null);

export function ProfileProvider({children, currentProfile}) {
  const {
    isBeingFollowedByYou,
    isFollowingYou,
    displayName,
    handle,
    bio,
    joined,
    location,
    numFollowers,
    numFollowing,
    numLikes,
    url
  } = currentProfile;

  const joinedDate = moment(joined).format('MMMM YYYY');

  return (
    <ProfileContext.Provider
      value={{
        isBeingFollowedByYou,
        isFollowingYou,
        displayName,
        handle,
        bio,
        joinedDate,
        location,
        numFollowers,
        numFollowing,
        numLikes,
        url
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

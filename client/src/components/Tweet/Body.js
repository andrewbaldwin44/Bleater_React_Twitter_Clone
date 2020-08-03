import React, { useContext } from "react";
import styled from 'styled-components';

import { TweetContext } from './TweetContext';

function Body() {
  const {
    tweetContents,
    tweetMedia
  } = useContext(TweetContext);

  return (
    <>
      <TweetContents>{tweetContents}</TweetContents>
      {tweetMedia && (
        <TweetMediaContainer>
          <TweetMedia src={tweetMedia} />
        </TweetMediaContainer>
      )}
    </>
  )
}

export const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

export const TweetMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const TweetMedia = styled.img`
  max-width: 100%;
  border-radius: 20px;
`;

export default Body;

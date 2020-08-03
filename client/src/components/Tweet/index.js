import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { TweetContext } from './TweetContext';

const Tweet = () => {
  const { avatarSrc } = useContext(TweetContext);

  return (
    <Wrapper >
      <Avatar src={avatarSrc} />
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

export const Avatar = styled.img`
  max-width: 48px;
  min-width: 48px;
  height: 48px;
  margin-right: 50px;
  border-radius: 50%;
`;

export default Tweet;

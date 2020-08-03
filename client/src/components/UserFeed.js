import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.hook';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import Spinner from "./Spinner";
import { SpinnerContainer } from "./HomeFeed";

function UserFeed() {
  const { tweetID } = useParams();

  const [userFeed, setUserFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  useFetch(`/api/${tweetID}/feed`, data => {
    setUserFeed(data);
    setStatus('idle');
  });

  console.log('hi')

  return (
    <div>
      hello
    </div>
  )
}

export default UserFeed;

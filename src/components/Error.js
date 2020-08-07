import React from 'react';
import styled from "styled-components";

import { ReactComponent as LostGoat } from  '../assets/lostgoat.svg';

const defaultMessage = "Baaaaahhh that's an error!"

function Error({ message }) {
  message = message || defaultMessage

  return (
    <Wrapper>
      <ErrorImage />
      <span>{message}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ErrorImage = styled(LostGoat)`
  height: 100px;
  margin-bottom: 20px;
`;

export default Error;

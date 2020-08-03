import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PAGE_DIMENSIONS } from "../constants";

const { textOffset } = PAGE_DIMENSIONS;


function Notifications({ setHeader }) {
  useEffect(() => {
    setHeader('Notifications');
  });

  return (
    <Wrapper>You have no new notifications!</Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: ${textOffset};
`;

export default Notifications;

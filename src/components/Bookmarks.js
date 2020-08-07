import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PAGE_DIMENSIONS } from "../constants";

const { textOffset } = PAGE_DIMENSIONS;

function Bookmarks({ setHeader }) {
  useEffect(() => {
    setHeader('Bookmarks');
  });

  return (
    <Wrapper>You have no bookmarks!</Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: ${textOffset};
`;

export default Bookmarks;

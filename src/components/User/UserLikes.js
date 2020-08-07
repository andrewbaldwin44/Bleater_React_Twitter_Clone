import React from "react";
import styled from 'styled-components';

import { PAGE_DIMENSIONS } from "../../constants";

const { textOffset } = PAGE_DIMENSIONS;

function UserLikes() {
  return (
    <Wrapper>No likes here!</Wrapper>
  )
}

const Wrapper = styled.div`
  margin: ${textOffset};
`;

export default UserLikes;

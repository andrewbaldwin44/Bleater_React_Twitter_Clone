import React from "react";
import styled from 'styled-components';

import { PAGE_DIMENSIONS } from "../../constants";

const { textOffset } = PAGE_DIMENSIONS;

function UserMedia() {
  return (
    <Wrapper>No media here!</Wrapper>
  )
}

const Wrapper = styled.div`
  margin: ${textOffset};
`;

export default UserMedia;

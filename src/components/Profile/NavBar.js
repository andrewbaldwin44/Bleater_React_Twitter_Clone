import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ProfileContext } from "./ProfileContext";
import { COLORS } from "../../constants";

const { primaryDarkRed, borderColor } = COLORS;

function NavBar() {
  const { handle } = useContext(ProfileContext);

  return (
    <NavLinks>
      <StyledLink
        exact
        to={`/users/${handle}/feed`}
        activeClassName="active"
      >
        Bleats
      </StyledLink>
      <StyledLink
        exact
        to={`/users/${handle}/media`}
        activeClassName="active"
      >
        Media
      </StyledLink>
      <StyledLink
        exact
        to={`/users/${handle}/likes`}
        activeClassName="active"
      >
        Likes
      </StyledLink>
    </NavLinks>
  )
}

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${borderColor};
  height: 50px;

  .active {
    color: ${primaryDarkRed};
    border-bottom: 3px solid ${primaryDarkRed};
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  width: calc(100% / 3);
  height: 100%;
`;

export default NavBar;

import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { RiHome7Line } from "react-icons/ri";
import { BsPerson, BsBell } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { COLORS } from "../constants";
import { CurrentUserContext } from './CurrentUserContext';
import { ReactComponent as CatLogo } from  '../assets/logo.svg';
import styled from "styled-components";

const { primary } = COLORS;

function Sidebar() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser)

  return (
    <NavBar>
      <li>
        <StyledCatLogo />
      </li>
      <NavItem>
        <StyledLink exact to="/" activeClassName="active">
          <RiHome7Line className="icon" />
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink exact to={`/profile/${currentUser.handle}`} activeClassName="active">
          <BsPerson className="icon" />
          Profile
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink exact to="/notifications" activeClassName="active">
          <BsBell className="icon" />
          Notifications
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink exact to="/bookmarks" activeClassName="active">
          <FiBookmark className="icon" />
          Bookmarks
        </StyledLink>
      </NavItem>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  margin-right: 50px;
`;

const NavItem = styled.li`
  border-radius: 25px;

  .active {
    color: #CC0000;
  }

  &:hover {
    background-color: ${primary};
  }
`;


const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;

  .icon {
    font-size: 26px;
    margin-right: 20px;
  }
`;

const StyledCatLogo = styled(CatLogo)`
  height: 60px;
  width: 60px;
  transform: scale(-1, 1);
`;

export default Sidebar;

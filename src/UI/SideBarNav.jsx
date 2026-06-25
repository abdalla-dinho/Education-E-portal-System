import { IoBookOutline, IoLayers, IoSettings } from "react-icons/io5";

import styled from "styled-components";
import { FaChartLine, FaClipboard, FaMoneyCheck, FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { useProfile } from "../features/Authentication/useProfile";
import { MdManageAccounts } from "react-icons/md";

const StyledSideBarNav = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

const LogoNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: var(--font-size-xs);
  font-weight: bolder;
`;

const LogoContainer = styled.div`
  /* margin-bottom: 3.6rem; */
`;

const Nav = styled.nav`
  flex: 1;
  padding: 1.6rem 1.2rem;
`;

const NavItem = styled.a`
  font-family: var(--font-tiernery);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;

  /* transition: background 0.2s ease; */
  &:hover {
    /* background-color: var(--color-grey-300); lighter gray */
  }

  &.active {
    transition: all 0.3s ease;

    background-color: var(--color-grey-500);
    color: var(--color-grey-200);
  }

  svg {
    flex-shrink: 0;
  }
`;

function SideBarNav() {
  const { profile } = useProfile();

  const Role = profile?.Role;

  return (
    <StyledSideBarNav>
      <LogoContainer>
        <LogoNavLink>
          <IoBookOutline size={36} />
          <span>EduPort</span>
        </LogoNavLink>
      </LogoContainer>

      <Nav>
        {Role !== "Admin" && (
          <>
            <NavItem as={NavLink} to="charts">
              <FaChartLine size={20} />
              <span>Charts</span>
            </NavItem>

            <NavItem as={NavLink} to="courses">
              <IoLayers size={20} />

              <span>Courses</span>
            </NavItem>
            <NavItem as={NavLink} to="exams">
              <FaClipboard size={20} />
              <span>Exams</span>
            </NavItem>
            <NavItem as={NavLink} to="financial">
              <FaMoneyCheck />
              <span>Financial</span>
            </NavItem>
          </>
        )}

        <NavItem as={NavLink} to="settings">
          <IoSettings />
          <span>Settings</span>
        </NavItem>

        {Role === "Admin" && (
          <>
            <NavItem as={NavLink} to="user">
              <FaUser />
              <span>User</span>
            </NavItem>

            <NavItem as={NavLink} to="Exammanagment">
              <MdManageAccounts size={20} />
              <span>Exams managment</span>
            </NavItem>
          </>
        )}

        <Profile />
      </Nav>
    </StyledSideBarNav>
  );
}

export default SideBarNav;

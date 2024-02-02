import React from "react";
import styled from "styled-components";
import ButtonHover from "../Animations/ButtonHover";

function NavBar() {
  return (
    <Nav>
      <img src="/sundown_logo.svg" alt="Sundown logo" />
      <NavRight>
        <ButtonHover text={"Work"} />
        <ButtonHover text={"Support"} />
        <ButtonHover text={"Contact"} />
        <ButtonHover text={"Menu"} />
      </NavRight>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  background-color: var(--primary-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    @media screen and (max-width: 600px) {
      width: 35vw;
      height: 35vw;
    }
    @media screen and (max-width: 576px) {
      width: 25vw;
      height: 25vw;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  & > * {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  & > :last-child {
    @media screen and (max-width: 768px) {
      display: initial;
    }
  }
`;

import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar_Wrapper>
      <LogoImg src={Logo} alt="logo" />
      <Hamburger onClick={() => toggleNavbar()}>
        <img src={HamburgerIcon} alt="hamburger-icon" />
      </Hamburger>
      {isOpen && <MobileNav toggleNavbar={toggleNavbar} />}
      <Nav_UL>
        <Nav_LI>About</Nav_LI>
        <Nav_LI>Careers</Nav_LI>
        <Nav_LI>Events</Nav_LI>
        <Nav_LI>Products</Nav_LI>
        <Nav_LI>Support</Nav_LI>
      </Nav_UL>
    </Navbar_Wrapper>
  );
};

export default Navbar;

const Navbar_Wrapper = styled.nav`
  /* position it absolute in the Hero component */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
  }
`;
const LogoImg = styled.img`
  object-fit: cover;
`;
const Nav_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 30%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Nav_LI = styled.li``;

const Hamburger = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

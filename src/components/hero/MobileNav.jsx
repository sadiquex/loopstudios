import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import CloseIcon from "../../assets/images/icon-close.svg";

import React from "react";

const MobileNav = ({ toggleNavbar }) => {
  return (
    <Wrapper_NAV>
      <Top>
        <LogoImg src={Logo} alt="logo" />
        <Close onClick={() => toggleNavbar()}>
          <img src={CloseIcon} alt="close-icon" />
        </Close>
      </Top>
      <Nav_UL>
        <Nav_LI>ABOUT</Nav_LI>
        <Nav_LI>CAREERS</Nav_LI>
        <Nav_LI>EVENTS</Nav_LI>
        <Nav_LI>PRODUCTS</Nav_LI>
        <Nav_LI>SUPPORT</Nav_LI>
      </Nav_UL>
    </Wrapper_NAV>
  );
};

export default MobileNav;

const Wrapper_NAV = styled.nav`
  width: 100%;
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  /* padding: 0 4rem; */
  z-index: 400;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 10rem;
  /* justify-content: space-around; */
`;

const Top = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  object-fit: cover;
`;

const Close = styled.div``;
const Nav_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #fff;
  /* background: pink; */
  width: 90%;
  gap: 20px;
  margin: 0 auto;
  font-size: 36px;
  font-family: "Josefin Sans";
`;
const Nav_LI = styled.li``;

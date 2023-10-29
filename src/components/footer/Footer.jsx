import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Pinterest from "../../assets/images/icon-pinterest.svg";
import Instagram from "../../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContent>
        <Side className="left-align">
          <LogoImg src={Logo} />
          <Nav_nav>
            <Nav_UL>
              <Nav_LI>About</Nav_LI>
              <Nav_LI>Careers</Nav_LI>
              <Nav_LI>Events</Nav_LI>
              <Nav_LI>Products</Nav_LI>
              <Nav_LI>Support</Nav_LI>
            </Nav_UL>
          </Nav_nav>
        </Side>
        <Side>
          <Socials_DIV>
            <a href="">
              <img src={Facebook} alt="fb-icon" />
            </a>
            <a href="">
              <img src={Twitter} alt="twitter-icon" />
            </a>
            <a href="">
              <img src={Pinterest} alt="pin-icon" />
            </a>
            <a href="">
              <img src={Instagram} alt="ig-icon" />
            </a>
          </Socials_DIV>
          <Copyright>&copy; 2023 Loopstudios. All rights reserved.</Copyright>
        </Side>
      </FooterContent>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 160px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: auto;
    padding: 20px 0;
  }
`;

const FooterContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-align {
    align-items: flex-start;
    @media screen and (max-width: 480px) {
      align-items: center;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    height: auto;
    padding: 20px 0;
  }
`;

// left and right side in the footer
const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 40%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0;
  }
`;

const LogoImg = styled.img`
  object-fit: cover;
  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;
const Nav_nav = styled.nav`
  width: 60%;
`;
const Nav_UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    gap: 20px;
  }
`;

const Nav_LI = styled.li``;

// social media container
const Socials_DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 10px;
  }
`;

const Copyright = styled.p`
  white-space: nowrap;
  color: hsl(0, 0%, 41%);
`;

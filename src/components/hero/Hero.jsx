import styled from "styled-components";
import HeroImage from "../../assets/images/desktop/image-hero.jpg";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <HeroWrapper>
      <Content>
        <Navbar />
        <Hero_TEXT>
          <Hero_TEXT_Content>
            IMMERSIVE EXPERIENCES THAT DELIVER
          </Hero_TEXT_Content>
        </Hero_TEXT>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  width: 100%;
  background: pink;
  height: 80vh;
  /* position: relative; */
  display: flex;
  justify-content: center;
  background-image: url("https://media.discordapp.net/attachments/1168131277820543056/1168131962813304922/image-hero.jpg?ex=6550a6aa&is=653e31aa&hm=82f9a31f8a2c65e68a967fe930faa48f235f9fea69b8d3261d97717411d4323b&=&width=1340&height=605");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 480px) {
    /* height: auto; */
    /* width: 20%; */
  }
`;

// set the div for content
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 150px;
  padding-top: 3rem;

  @media screen and (max-width: 480px) {
    /* background: orangered; */
    width: 100%;
    align-items: center;
    padding: 3rem 2rem;
  }
`;

// huge text
const Hero_TEXT = styled.div`
  /* position: absolute; */
  color: #fff;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Hero_TEXT_Content = styled.p`
  font-size: 70px;
  border: 2px solid #fff;
  width: 50%;
  padding: 20px;
  /* background: pink; */
  font-family: "Josefin Sans";

  @media screen and (max-width: 480px) {
    font-size: 48px;
    padding: 0;
    width: auto;
    line-height: 1.2;
  }
`;

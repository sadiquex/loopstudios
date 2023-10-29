import styled from "styled-components";

const Card = ({ card }) => {
  // destructure card object
  const { name, desktopImage, mobileImage } = card;
  return (
    <>
      <DesktopCard>
        <Card_Text>{name}</Card_Text>
        <Card_Img src={desktopImage} alt="" />
      </DesktopCard>
      {/* mobile */}
      <MobileCard>
        <Card_Text>{name}</Card_Text>
        <Card_Img src={mobileImage} alt="" />
      </MobileCard>
    </>
  );
};

export default Card;

const DesktopCard = styled.div`
  height: 450px;
  color: #fff;
  /* border: 3px solid green; */
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MobileCard = styled.div`
  width: 100%;
  height: 120px;
  display: none;
  color: #fff;
  /* border: 3px solid green; */
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const Card_Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.2;
  }
`;

const Card_Text = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  font-size: 30px;
  width: 60%;
  font-family: "Josefin Sans";
`;

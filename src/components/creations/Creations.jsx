import styled from "styled-components";
import Card from "./Card";
import { desktopCardsData } from "./cardsData";
import CreationsHeader from "./CreationsHeader";

const Creations = () => {
  return (
    <Wrapper>
      <CreationsHeader />
      <Top>
        <Title>OUR CREATIONS</Title>
        <Button>SEE ALL</Button>
      </Top>
      <CardContainer>
        {desktopCardsData.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Creations;

const Wrapper = styled.div`
  /* background: pink; */
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 80%;
  margin: 0 auto;
  font-family: "Josefin Sans";

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const Title = styled.p`
  font-size: 30px;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const Button = styled.button`
  border: 2px solid #000;
  letter-spacing: 1.4;
  background: transparent;
  padding: 10px 20px;

  &:hover {
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

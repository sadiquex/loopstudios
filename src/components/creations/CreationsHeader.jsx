import styled from "styled-components";
import CreationsImage from "../../assets/images/desktop/image-interactive.jpg";

const CreationsHeader = () => {
  return (
    <Wrapper>
      <Image_DIV>
        <Image_IMG src={CreationsImage} alt="creations-header" />
      </Image_DIV>
      <Text_DIV>
        <Content>
          <Title>THE LEADER IN INTERACTIVE AR</Title>
          <Description>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bing their brand.
          </Description>
        </Content>
      </Text_DIV>
    </Wrapper>
  );
};

export default CreationsHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Image_DIV = styled.div``;

const Image_IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text_DIV = styled.div`
  height: 300px;
  flex: 1;
  background: #fff;
  transform: translateX(-160px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    transform: translateX(0);
  }
`;
const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 480px) {
    padding: 3rem 0;
    width: auto;
    text-align: center;
  }
`;
const Title = styled.p`
  font-family: "Josefin Sans";
  font-size: 36px;
`;

const Description = styled.p`
  font-family: "Josefin Sans";
  line-height: 1.2;
`;

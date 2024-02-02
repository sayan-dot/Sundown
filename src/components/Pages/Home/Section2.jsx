import React from "react";
import styled from "styled-components";
import InfiniteTextScroll from "../../Animations/InfiniteTextScroll";

function Section2() {
  return (
    <>
      <SecondSection>
        <InfiniteTextScroll
          text1={"EXPERIENCES"}
          text2={"CONTENT"}
          text3={"ENVIRONMENTS"}
          speed={13}
        />
        <ContainerDiv>
          <LeftDiv>
            <SectionH4>
              We are a group of design-driven, goal-focused creators, producers,
              and designers who believe that the details make all the
              difference.
            </SectionH4>
          </LeftDiv>
          <RightDiv>
            <Card>
              <ImageContainer>
                <img src="/cardImage01.webp" alt="" />
               
              </ImageContainer>
            </Card>
          </RightDiv>
        </ContainerDiv>
        {/* <Blob height={50} width={50} left={20} top={80} zIndex={1} /> */}
      </SecondSection>
    </>
  );
}

export default Section2;

const SecondSection = styled.div`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  @media screen and (max-width: 768px) {
    padding: 3vw;
    min-height: 20vh;
  }
  @media screen and (max-width: 568px) {
    min-height: 60vh;
  }
`;

const ContainerDiv = styled.div`
  margin-top: 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  padding: 3vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    gap: 4vw;
  }
  @media screen and (max-width: 568px) {
    gap:0
  }
`;

const LeftDiv = styled.div`
  width: 120%;
  line-height: 4rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SectionH4 = styled.h4`
  font-size: 4vw;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 1450px) {
    line-height: 4vw;
    left: 0;
  }
  @media screen and (max-width: 992px) {
    font-size: 5vw;
    line-height: 5vw;
    left: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    line-height: 5vw;
    left: 0;
  }

`;
const RightDiv = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 568px) {
    height: 50%;
  }
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;

  @media screen and (max-width: 1450px) {
    height: 25vw;
    width: 30vw;
  }
  @media screen and (max-width: 992px) {
    height: 20vw;
    width: 25vw;
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    height: 40vw;
    width: 45vw;
    align-items: flex-start;
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  h5 {
    width: 15rem;
    height: 20rem;
    margin-top: 4vw;
    font-family: sans-serif;
    font-weight: 100;
    font-size: 1.2vw;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

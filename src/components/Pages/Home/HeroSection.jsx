import React from "react";
import styled from "styled-components";
import Blob from "../../Animations/Blob";
import NavBar from "../../reusable/NavBar";
import Transparent from "../../reusable/Transparent";
import DisplaySection from "./DisplaySection";
import FeatureSection from "./FeatureSection";
import Section2 from "./Section2";

function HeroSection() {
  return (
    <>
      <HeroPage>
        <NavBar />
        <Center>
          <Left>
            <h3>
              Sundown is a multi-disciplinary studio focused on creating unique,
              end-to-end experiences and environments.
            </h3>
          </Left>
          <Right>
            <h1>SPACES</h1>
            <h1>THAT</h1>
            <h1>INSPIRE</h1>
          </Right>
        </Center>

        <Blob left={60} top={45} zIndex={1} />

        <VideoPlayer loop muted autoPlay src="vid.mp4"></VideoPlayer>
      </HeroPage>
      <Section2 />
      <FeatureSection />
      <DisplaySection />
      <Transparent />
    </>
  );
}

export default HeroSection;

const HeroPage = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding: 3vw;
  @media screen and (max-width: 768px) {
    padding: 3vw;
  }
`;
const Center = styled.div`
  height: 70vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 2.5%;
  /* background-color: blue; */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10vw;
    justify-content: flex-end;
    height: 60vh;
    border-bottom: none;
  }
  @media screen and (max-width: 568px) {
    height: 40vh;
  }
`;
const Left = styled.div`
  h3 {
    width: 50%;
    font-size: 2vw;
    letter-spacing: -1px;
    line-height: 1em;
    @media screen and (max-width: 768px) {
      font-size: 4vw;
      width: 80%;
      font-family: sans-serif;
      font-weight: 600;
    }
  }
`;
const Right = styled.div`
  @media screen and (max-width: 768px) {
    order: -1;
  }
  h1 {
    text-align: right;
    font-size: 11vw;
    line-height: 9vw;
    letter-spacing: -3px;
    @media screen and (max-width: 768px) {
      font-size: 12vw;
      line-height: 10vw;
    }
    @media screen and (max-width: 568px) {
    font-size: 16vw;
    line-height: 14vw;
  }
  }
`;
const VideoPlayer = styled.video`
  margin-top: 4vw;
  width: 100%;
  border-radius: 30px;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 768px) {
    height: 60vh;
    object-fit: cover;
    margin-top: 10vw;
  }
`;

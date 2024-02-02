import React from "react";
import styled from "styled-components";
import ButtonHover from "../../Animations/ButtonHover";
import Features from "../../Animations/Features";

function FeatureSection() {
  return (
    <>
      <FeatureListSection>
        <Simplehearder>
          <img src="/fev.png" alt="" />
          <h5>FEATURED PROJECTS</h5>
        </Simplehearder>
        <Features headlineText={"50th Anniversary"} />
        <Features headlineText={"Makers Studio HOI"} />
        <Features headlineText={"NTFW Popup"} subText={"AFTERPLAY"} />
        <Features headlineText={"Play New Kidvision"} />
        <Features headlineText={"SOHO NYC"} subText={"ARC'TERYX"} />
        <Features headlineText={"Air Force 12021 "} />
        <Features headlineText={"SOHO 2023"} subText={"converse"} />
        <ButtonSize>
          <ButtonHover text={"All Projects"} />
        </ButtonSize>
      </FeatureListSection>
    </>
  );
}

export default FeatureSection;

const FeatureListSection = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
  position: relative;
  padding: 5vw 0;
  @media screen and (max-width: 768px) {
    min-height: 70vh;
  }
`;
const Simplehearder = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 3vw;
  img {
    height: 1rem;
  }
  h5 {
    font-family: sans-serif;
    font-weight: 100;
  }
`;
const ButtonSize = styled.div`
  display: flex;
  margin-top: 2%;
  padding: 3vw;
  align-items: center;
`;

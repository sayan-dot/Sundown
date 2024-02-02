import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
function Features({ headlineText, subText = "NIKE" }) {
  const yellowRef = useRef(null);
  const handleEnter = () => {
    gsap.to(yellowRef.current, {
      y: "100%",
      duration: 0.3,
    });
  };
  const handleLeave = () => {
    gsap.to(yellowRef.current, {
      y: "0",
      duration: 0.3,
    });
  };

  return (
    <>
      <InnerDiv onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <YellowDiv ref={yellowRef}></YellowDiv>
        <Content>
          <h3>{headlineText}</h3>
          <h5>{subText}</h5>
        </Content>
      </InnerDiv>
    </>
  );
}

export default Features;
const YellowDiv = styled.div`
  position: absolute;
  bottom: 100%;
  width: 100%;
  height: 100%;
  background-color: #ff9831;
`;

const InnerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid black;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 3vw;
  h3 {
    font-size: 3rem;
    @media screen and (max-width:576px){
      font-size: 2rem;
    }
  }
`;

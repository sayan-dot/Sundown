import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";

function ButtonHover({text}) {
  const Buttonref = useRef(null);
  const hoverRef = useRef(null);
  const anchorRef = useRef(null);
  const handleEnter = () => {
    gsap.to(hoverRef.current, {
      bottom: "0",
      borderRadius: "0%",
      duration: 0.2,
    });
    gsap.to(anchorRef.current, {
      color: "white",
    });
  };
  const handleLeave = () => {
    gsap.to(hoverRef.current, {
      bottom: "-100%",
      borderRadius: "50%",
      duration: 0.2,
    });
    gsap.to(anchorRef.current, {
      color: "black",
    });
  };

  return (
    <ButtonH4
      ref={Buttonref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Anchor href="" ref={anchorRef}>
        {text}
      </Anchor>
      <HoverDiv id="hoverDiv" ref={hoverRef}></HoverDiv>
    </ButtonH4>
  );
}

export default ButtonHover;

const ButtonH4 = styled.h4`
  border: 1px solid var(--gray);
  padding: 10px 20px;
  border-radius: 3vw;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const HoverDiv = styled.div`
  position: absolute;
  background-color: var(--secondary-color);
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -100%;
  border-radius: 100%;
`;

const Anchor = styled.a`
  color: var(--secondary-color);
  text-decoration: none;
  position: relative;
  z-index: 10;
  font-family: sans-serif;
`;

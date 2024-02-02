import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";

function Blob({
  height = 80,
  width = 80,
  bottom = 0,
  top = 0,
  left = 0,
  right = 0,
  zIndex = 1,
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Animation for Blob 1
    tl.fromTo("#blob1", { x: 0 }, { x: -80, y: -70, duration: 1.5 })
      .to("#blob1", { x: 80, y: 10, duration: 1.5 })
      .to("#blob1", { x: 0, y: -50, duration: 1.5 });

    // Animation for Blob 2
    tl.fromTo(
      "#blob2",
      { x: 0 },
      { x: 80, y: -50, duration: 1.5, delay: -10.8 }
    )
      .to("#blob2", { x: -60, y: -100, duration: 1 })
      .to("#blob2", { x: 40, y: 0, duration: 1.5 });

    // Animation for Blob 3
    tl.fromTo(
      "#blob3",
      { x: 0 },
      { x: 50, y: -50, duration: 1.5, delay: -20.8 }
    )
      .to("#blob3", { x: -50, y: -50, duration: 2 })
      .to("#blob3", { x: 10, y: 10, duration: 2 });
  });

  return (
    <div ref={containerRef}>
      <Blobs
        id="blob1"
        height={height}
        width={width}
        bottom={bottom}
        top={top}
        left={left}
        right={right}
        zIndex={zIndex}
      ></Blobs>
      <Blobs
        id="blob2"
        height={height}
        width={width}
        bottom={bottom}
        top={top}
        left={left}
        right={right}
        zIndex={zIndex}
      ></Blobs>
      <Blobs
        id="blob3"
        height={height}
        width={width}
        bottom={bottom}
        top={top}
        left={left}
        right={right}
        zIndex={zIndex}
      ></Blobs>
    </div>
  );
}

export default Blob;

const Blobs = styled.div`
  height: ${(prop) => prop.height}vh;
  border-radius: 50%;
  width: ${(prop) => prop.width}vh;
  background: linear-gradient(#fe320a, orangeRed, #ff8000);
  position: absolute;
  right: ${(prop) => prop.right}%;
  top: ${(prop) => prop.top}%;
  bottom: ${(prop) => prop.bottom}%;
  left: ${(prop) => prop.left}%;
  filter: blur(30px);
  z-index: ${(prop) => prop.zIndex};
  @media screen and (max-width: 768px){
    height: 80vw;
    width: 80vw;
  }
`;

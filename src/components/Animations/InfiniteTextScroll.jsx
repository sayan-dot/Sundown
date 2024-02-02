import React,{useRef} from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function InfiniteTextScroll({text1, text2, text3,speed}) {
    const movingTextRef = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline({repeat:-1})

        tl.fromTo("#TextBlock",{
            x:0,
        },{
            x:"-100%",
            duration:speed,
            ease: "linear"
        })
    },{scope:movingTextRef})
  return (
    <>
      <MovingText ref={movingTextRef}>
        <ContainerText id="TextBlock">
          <h1>{text1}</h1>
          <FevIcon src="/fev.png" alt="" />
          <h1>{text2}</h1>
          <FevIcon src="/fev.png" alt="" />
          <h1>{text3}</h1>
          <FevIcon src="/fev.png" alt="" />
        </ContainerText>
        <ContainerText id="TextBlock">
          <h1>{text1}</h1>
          <FevIcon src="/fev.png" alt="" />
          <h1>{text2}</h1>
          <FevIcon src="/fev.png" alt="" />
          <h1>{text3}</h1>
          <FevIcon src="/fev.png" alt="" />
        </ContainerText>
        <ContainerText id="TextBlock">
          <h1>{text1}</h1>
          <FevIcon src="/fev.png" alt="" />
          <h1>{text2}</h1>
          <FevIcon src="/fev.png" alt="" />
          <h1>{text3}</h1>
          <FevIcon src="/fev.png" alt="" />
        </ContainerText>
      </MovingText>
    </>
  );
}

export default InfiniteTextScroll;

const MovingText = styled.div`
display: inline-block;
white-space: nowrap;
`;
const ContainerText = styled.div`
display: inline-block;
white-space: nowrap;
h1{
    font-size: 8rem;
    display: inline-block;
    white-space: nowrap;
    @media screen and (max-width:768px){
      font-size: 4rem;
    }
}
`;
const FevIcon = styled.img`
height: 4rem;
margin: 1vw 3vw;
@media screen and (max-width: 768px){
  height: 2rem;
}
`;

import React from "react";
import styled from "styled-components";

function DisplaySection() {
  return (
    <OuterDiv>
      <InnerDiv>
        <LeftDiv>
          <span>Design</span>
          <span>Project</span>
          <span>Execution</span>
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </LeftDiv>
        <RightDiv>
          <img src="/blackbox.webp" alt="" />
        </RightDiv>
      </InnerDiv>
    </OuterDiv>
  );
}

export default DisplaySection;

const OuterDiv = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
  min-width: 100vw;
  padding: 5vw 3vw;

`;
const InnerDiv = styled.div`
  background-color: var(--secondary-color);
  height: 100%;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:992px){
    flex-direction: column;
    align-items: space-between;
    justify-content:center
  }
`;
const LeftDiv = styled.div`
  width: 100%;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  span {
    font-size: 5rem;
    line-height: 5rem;
    @media screen and (max-width:992px){
      font-size:4rem;
      line-height:4rem;}
  }
  p {
    margin-top: 1rem;
    font-weight: 100;
    font-family: sans-serif;
    width: 70%;
    @media screen and (max-width:768px){
      width: 100%;}
  }
`;
const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`;

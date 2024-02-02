import React from "react";
import styled from "styled-components";
import Blob from "../Animations/Blob";

function Footer() {
  return (
    <div>
      <FooterDiv>
        <Links>
          <h4>Work</h4>
          <h4>Studio</h4>
          <h4>Contact</h4>
          <h2>SUNDOWN</h2>
        </Links>
        <Blob left={-20} top={-40} height={90} width={150} />
        <Blob left={10} top={10} height={50} width={300} />
      </FooterDiv>
    </div>
  );
}

export default Footer;

const FooterDiv = styled.div`
  background-color: black;
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: -10;
  @media screen and (max-width:992px){
    height:90vh
  }
`;
const Links = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 3vw;
  h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 4vw;
    line-height: 4vw;
    z-index: 2;
    color: var(--primary-color);
    @media screen and (max-width:992px){
      font-size:5vw;
      line-height: 5vw
    }
    @media screen and (max-width:768px){
      font-size:7vw;
      line-height: 7vw
    }
  }
  h2{
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 17vw;
    width: 100%;
    text-align: center;
    color: var(--primary-color);
  }
`;

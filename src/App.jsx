import React from "react";
import styled from "styled-components";
import HeroSection from "./components/Pages/Home/HeroSection";
import Footer from "./components/reusable/Footer";
import LenisSmoothScroll from "./smoothScroll/LenisSmoothScroll";
function App() {
  return (
    <LenisSmoothScroll>
      <Main id="main">
        <HeroSection />
      </Main>
      <Footer />
    </LenisSmoothScroll>
  );
}

export default App;

const Main = styled.div`
  overflow: hidden;
`

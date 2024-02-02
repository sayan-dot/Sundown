import { createGlobalStyle } from "styled-components";
import customfont from "./font/des.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: display;
      src: url(${customfont});
    }
    :root{
        --primary-color: #EFEAE3;
        --secondary-color: #0B0500;
        --third-color: #EAE2DC;
        --gray:#BFBBB6;
    }
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    }
    html,
    body {
    width: 100%;
    height: 100%;
    font-family: display;
    background-color: var(--primary-color);

    }

`;
export default GlobalStyle;

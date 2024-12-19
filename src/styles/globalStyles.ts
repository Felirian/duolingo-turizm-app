import { createGlobalStyle } from "styled-components";
import {COLORS} from "@/styles/variables";
//import { COLORS } from "@/styles/variables";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
    //border: 1px pink solid; 
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 0;
    touch-action: none;
  }

  body {
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    
    background-color: ${COLORS.white};    
  }
  
  main {
    //overflow: hidden;
    width: 100%;
    height: 100%;
  }


  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {

    }

    &:disabled {

    }
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;

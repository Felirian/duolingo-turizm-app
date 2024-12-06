import { createGlobalStyle } from "styled-components";
import {COLORS} from "@/styles/variables";
//import { COLORS } from "@/styles/variables";

const GlobalStyles = createGlobalStyle`

  // @font-face {
  //  font-family: 'Poppins';
  //  src: url('/fonts/Poppins-Regular.ttf') format('truetype');
  //  font-weight: normal;
  //  font-style: normal;
  //  font-display: block;
  //}

  /* @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Medium.ttf') format('truetype');
    font-weight: medium;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  } */

  //@font-face {
  //  font-family: 'Comfortaa';
  //  src: url('/fonts/Comfortaa-SemiBold.ttf') format('truetype');
  //  font-weight: 600; 
  //  font-style: normal;
  //  font-display: block;
  //} 

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
  }

  body {
    width: 100%;
    overflow-x: hidden;
    max-width: 100vw;
    background-color: ${COLORS.white};    
  }
  
  main {
    overflow-x: hidden;
    max-width: 100vw;
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

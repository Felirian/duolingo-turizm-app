import { createGlobalStyle } from 'styled-components';
import {COLORS} from "./variables";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
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
    //background-color: inherit;
    color: inherit;
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
    color: ${COLORS.white};
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
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderWr>
      <span></span>
    </LoaderWr>
  );
};

const LoaderWr = styled.div`
  width: 100%;
  height: 80%;

  overflow-y: none;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.7;

  span {
    width: 48px;
    height: 48px;
    border: 5px dotted #02C77F;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 3s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.4);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;

export default Loader;

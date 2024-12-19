import React from 'react';
import styled from "styled-components";
import {CustomBtn} from "@/components/Shared/CustomBtn";
// eslint-disable-next-line
const Popup = ({QuizFunc, isCorrect}: any) => {

  return (
    <PopupWr $isOpen={QuizFunc.isHintOpen}>
      {isCorrect ? 'yes' : 'no'}
      <CustomBtn onClick={() => QuizFunc.nextQuestion()}>Продолжить</CustomBtn>
    </PopupWr>
  );
};

const PopupWr = styled.div<{$isOpen: boolean}>`
  width: 100%;
  position: absolute;
  padding: 5.71vw;
  bottom: 0;
  left: 0;
  transition: 0.5s ease;
  transform: ${({$isOpen})=> $isOpen ? 'translateY(0)':'translateY(100%)'};
  background-color: white;
`

export default Popup;
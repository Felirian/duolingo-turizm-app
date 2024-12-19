import React from 'react';
import styled from "styled-components";
import {CustomBtn} from "@/components/Shared/CustomBtn";
import {useQuizFunctions} from "@/features/_quiz_";

const Popup = ({QuizFunc}) => {

  return (
    <PopupWr $isOpen={QuizFunc.variables.isHintOpen}>
      <CustomBtn onClick={() => QuizFunc.fun.nextQuestion(true)}>Продолжить</CustomBtn>
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
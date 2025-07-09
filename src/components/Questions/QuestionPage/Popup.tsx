import React from 'react';
import styled from 'styled-components';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import { B2, H3 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import sadImg from '@/assets/img/popup/sad.png';
import smilingImg from '@/assets/img/popup/smiling.png';
import Image from 'next/image';

const correctHint: string[] = [
  "Правильно! Отличная работа!",
  "Правильно! Отличная работа!",
  "Точно! Ты на верном пути!",
  "Точно! Ты на верном пути!",
  "Точно! Ты на верном пути!",
  "Идеально! Ты справился!",
  "Идеально! Ты справился!",
  "Да! Именно так!",
  "Верно! Так держать!",
  "Идеально! Ты справился!",
]
// eslint-disable-next-line
const Popup = ({ QuizFunc, isCorrect }: any) => {
  return (
    <>
      <Overlay $isOpen={QuizFunc.isHintOpen} />
      <PopupWr $isOpen={QuizFunc.isHintOpen}>
      <ClewImg src={isCorrect ? smilingImg : sadImg} width={205} height={152} alt='Клубок' />

      <PopupTitle $isCorrect={isCorrect}>{isCorrect ? 'Верно!' : 'Неверно!'}</PopupTitle>
      <Hint>{isCorrect ? correctHint[Math.trunc(Math.random() * 10)] : QuizFunc.currentQuestion.hint}</Hint>
      <CustomBtn onClick={() => QuizFunc.nextQuestion()}>Продолжить</CustomBtn>
    </PopupWr>
    </>
  );
};

const PopupWr = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  position: absolute;
  z-index: 10;
  padding: 5.71vw;
  bottom: 0;
  left: 0;
  transition: 0.5s ease;

  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(120%)')};
  background-color: white;

  border-radius: 7.43vw 7.43vw 0px 0px;
  box-shadow: 0px -4px 13.5px 0px #dee2d5;

  * {
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  }
`;

const PopupTitle = styled(H3)<{ $isCorrect: boolean }>`
  color: ${({ $isCorrect }) => ($isCorrect ? COLORS.seaGreen : COLORS.red)};
  margin-bottom: 3.71vw;
`;

const Hint = styled(B2)`
  margin-bottom: 4.57vw;
  font-size: 4.57vw;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
`;

const ClewImg = styled(Image)`
  position: absolute;
  top: -43.5vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  pointer-events: none;
  width: 58.57vw;
  height: 43.43vw;
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(120%)')};
    transition: opacity 0.5s ease;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS.black};
    opacity:${({ $isOpen }) => ($isOpen ? '0.5' : '0')};
    pointer-events: auto;
`;

export default Popup;

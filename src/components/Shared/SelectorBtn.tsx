import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { Btn1Style } from '@/styles/textTags';

interface SelectorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPressed?: boolean; // Свойство, указывающее, нажата ли кнопка
  round?: boolean; // Свойство для круглой формы кнопки
}

export const SelectorButton = styled.button<SelectorButtonProps>`
  width: ${({ round }) => (round ? '16vw' : '100%')}; // Круглая кнопка или обычная
  height: 16vw;
  padding: 1.5vw 2vw;
  border: ${({ round, isPressed }) =>
    round ? `0.571vw solid ${isPressed ? '#02c77f' : '#fff'}` : `0.571vw solid ${isPressed ? '#02c77f' : '#fff'}`};
  border-radius: ${({ round }) => (round ? '50%' : '3.143vw')}; // Круглая или обычная форма
  background-color: #fff;
  color: #000;
  outline: none;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Btn1Style}
`;
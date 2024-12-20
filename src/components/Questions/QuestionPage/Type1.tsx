import React, { useEffect, useState } from 'react';
import { SelectorButton } from '@/components/Shared/SelectorBtn';
import SvgSelector from '@/components/Shared/SvgSelector';
import styled from 'styled-components';

// eslint-disable-next-line
const Type1 = ({ data, setIsCorrect, setSelected }: any) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null); // Состояние для отслеживания выбранного ответа

  useEffect(() => {
    // Проверяем, совпадает ли выбранный ответ с true_type1
    setIsCorrect(selectedAnswer === data.true_type1);
  }, [selectedAnswer, data.true_type1, setIsCorrect]);

  useEffect(() => {
    setSelectedAnswer(null); // Сбрасываем выбранный ответ при изменении данных
  }, [data]);

  const handleButtonClick = (answer: boolean) => {
    setSelected(true)
    setSelectedAnswer(answer); // Устанавливаем выбранный ответ
  };

  return (
    <SelectorWr>
      <SelectorButton
        round // Делаем кнопку круглой
        isPressed={selectedAnswer === true} // Проверяем, выбрана ли кнопка
        onClick={() => handleButtonClick(true)} // Обработчик клика
      >
        <StyledSvg>
          <SvgSelector svg='check' /> {/* Иконка "check" */}
        </StyledSvg>
      </SelectorButton>

      <SelectorButton
        round // Делаем кнопку круглой
        isPressed={selectedAnswer === false} // Проверяем, выбрана ли кнопка
        onClick={() => handleButtonClick(false)} // Обработчик клика
      >
        <StyledSvg>
          <SvgSelector svg='cross' /> {/* Иконка "cross" */}
        </StyledSvg>
      </SelectorButton>
    </SelectorWr>
  );
};

export default Type1;

const SelectorWr = styled.div`
  display: flex;
  gap: 14.29vw;
  justify-content: center;
  padding-top: 30vw;
`;

const StyledSvg = styled.div`
  width: 8vw;
  height: 8vw;

  svg {
    width: 100%;
    height: 100%;
    -webkit-filter: drop-shadow(0.86vw 0.86vw 0px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(0.86vw 0.86vw 0px rgba(0, 0, 0, 0.2));
  }
`;

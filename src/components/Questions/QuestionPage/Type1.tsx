import React, { useState } from 'react';
import { Btn3, H3 } from '@/styles/textTags';
import { SelectorButton } from '@/components/Shared/SelectorBtn';
import SvgSelector from '@/components/Shared/SvgSelector';
import styled from 'styled-components';

const Type1 = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Состояние для отслеживания выбранной кнопки

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index); // Переключаем выбор
  };

  return (
    <SelectorWr>
      {/* Первая кнопка с иконкой "check" */}
      <SelectorButton
        round // Делаем кнопку круглой
        isPressed={selectedIndex === 0} // Проверяем, выбрана ли кнопка
        onClick={() => handleButtonClick(0)} // Обработчик клика
      >
        <SvgSelector svg="check" /> {/* Иконка "check" */}
      </SelectorButton>

      {/* Вторая кнопка с иконкой "cross" */}
      <SelectorButton
        round // Делаем кнопку круглой
        isPressed={selectedIndex === 1} // Проверяем, выбрана ли кнопка
        onClick={() => handleButtonClick(1)} // Обработчик клика
      >
        <SvgSelector svg="cross" /> {/* Иконка "cross" */}
      </SelectorButton>
    </SelectorWr>
  );
};

export default Type1;

const SelectorWr = styled.div`
  display: flex;
  gap: 3vw;
  justify-content: center;
`;
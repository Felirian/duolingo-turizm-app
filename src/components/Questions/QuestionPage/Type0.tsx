import React, { useState } from 'react';
import { Btn3, H3 } from '@/styles/textTags';
import styled from 'styled-components';
import { SelectorButton } from '@/components/Shared/SelectorBtn';

const Type0 = ({ data }) => {
  // Состояние для отслеживания выбранных индексов
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  // Обработчик клика на кнопку
  const handleButtonClick = (index: number) => {
    if (data.true_type0.length > 1) {
      // Множественный выбор
      setSelectedIndexes((prevIndexes) => {
        if (prevIndexes.includes(index)) {
          // Если кнопка уже выбрана, удаляем ее из списка
          return prevIndexes.filter((i) => i !== index);
        } else {
          // Если кнопка не выбрана, добавляем ее в список
          return [...prevIndexes, index];
        }
      });
    } else {
      // Одиночный выбор
      setSelectedIndexes([index]);
    }
  };

  return (
    <SelectorWr>
      {/* <H3>{data.true_type0.length > 1 ? 'Несколько вариантов ответа' : 'Один вариант ответа'}</H3> */}
      {data.cont_type0.map((answer, i) => (
        <SelectorButton
          key={i}
          isPressed={selectedIndexes.includes(i)} // Проверяем, выбрана ли кнопка
          onClick={() => handleButtonClick(i)} // Обработчик клика
        >
          {answer}
        </SelectorButton>
      ))}
    </SelectorWr>
  );
};

export default Type0;

const SelectorWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;
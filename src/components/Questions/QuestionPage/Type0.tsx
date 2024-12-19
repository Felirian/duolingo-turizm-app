import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SelectorButton} from '@/components/Shared/SelectorBtn';
// eslint-disable-next-line
const Type0 = ({data, setIsCorrect}: any) => {
  // Состояние для отслеживания выбранных индексов
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    // Сортируем выбранные индексы по возрастанию
    const sortedSelectedIndexes = [...selectedIndexes].sort((a, b) => a - b);
    setIsCorrect(JSON.stringify(data.true_type0) === JSON.stringify(sortedSelectedIndexes));
  }, [selectedIndexes, data.true_type0, setIsCorrect]);

  useEffect(() => {
    setSelectedIndexes([]);
  }, [data]);

  // eslint-disable-next-line
  const handleButtonClick = (index: any) => {
    // eslint-disable-next-line
    setSelectedIndexes((prevIndexes: any[]): any => {
      if (data.true_type0.length === 1) {
        // Если длина true_type0 равна 1, то можно выбрать только один ответ
        return prevIndexes.includes(index) ? [] : [index];
      } else {
        // Если длина true_type0 больше 1, то можно выбрать несколько ответов
        if (prevIndexes.includes(index)) {
          // Если кнопка уже выбрана, удаляем её из списка
          return prevIndexes.filter((i) => i !== index);
        } else {
          // Если кнопка не выбрана, добавляем её в список
          return [...prevIndexes, index];
        }
      }
    });
  };

  return (
    <SelectorWr>
      {
        // eslint-disable-next-line
        data.cont_type0.map((answer: any, i: never): any => (
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
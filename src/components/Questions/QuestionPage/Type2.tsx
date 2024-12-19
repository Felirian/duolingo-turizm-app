import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { SelectorButton } from '@/components/Shared/SelectorBtn';

// Функция для перемешивания массива
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Type2 = ({ data }) => {
  // Перемешиваем массив true_type2
  const [answers, setAnswers] = useState(shuffleArray(data.true_type2));
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [touchTargetIndex, setTouchTargetIndex] = useState(null); // Индекс элемента, над которым находится палец
  const touchMoveTimeout = useRef(null); // Таймер для задержки переключения

  // Обработчик для начала перетаскивания (для мыши)
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    setDraggedIndex(index);
    setDragging(true);
  };

  // Обработчик для перемещения элемента (для мыши)
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Обработчик для окончания перетаскивания (для мыши)
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData('index');
    const newAnswers = [...answers];
    const [removed] = newAnswers.splice(sourceIndex, 1);
    newAnswers.splice(targetIndex, 0, removed);
    setAnswers(newAnswers);
    setDraggedIndex(null);
    setDragging(false);
  };

  // Обработчик для начала перетаскивания (для пальца)
  const handleTouchStart = (e, index) => {
    setDraggedIndex(index);
    setDragging(true);
    setTouchTargetIndex(index); // Изначально палец находится над текущим элементом
  };

  // Обработчик для перемещения элемента (для пальца)
  const handleTouchMove = (e) => {
    e.preventDefault();
    if (draggedIndex !== null) {
      const touch = e.touches[0];
      const elements = document.querySelectorAll('.selector-con'); // Получаем все элементы списка
      let newTargetIndex = null;

      // Определяем, над каким элементом находится палец
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
          newTargetIndex = index;
        }
      });

      // Если палец находится над другим элементом, устанавливаем новый целевой индекс
      if (newTargetIndex !== null && newTargetIndex !== touchTargetIndex) {
        setTouchTargetIndex(newTargetIndex);

        // Задержка переключения
        clearTimeout(touchMoveTimeout.current);
        touchMoveTimeout.current = setTimeout(() => {
          if (newTargetIndex !== draggedIndex) {
            const newAnswers = [...answers];
            const [removed] = newAnswers.splice(draggedIndex, 1);
            newAnswers.splice(newTargetIndex, 0, removed);
            setAnswers(newAnswers);
            setDraggedIndex(newTargetIndex);
          }
        }, 100); // Задержка в 300 мс
      }
    }
  };

  const handleTouchEnd = () => {
    setDraggedIndex(null);
    setDragging(false);
    setTouchTargetIndex(null);
    clearTimeout(touchMoveTimeout.current);
  };

  return (
    <SelectorWr>
      {answers.map((answer, index) => (
        <SelectorCon
          key={index}
          className="selector-con"
          draggable={!dragging}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          onTouchStart={(e) => handleTouchStart(e, index)}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            opacity: dragging && draggedIndex === index ? 0.5 : 1,
            transform: dragging && draggedIndex === index ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s ease',
          }}
        >
          <SelectorNum>{index + 1}</SelectorNum>
          <SelectorButton>{answer}</SelectorButton>
        </SelectorCon>
      ))}
    </SelectorWr>
  );
};

export default Type2;

const SelectorWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

const SelectorCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const SelectorNum = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  background-color: green; 
  color: white; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px; 
  flex-shrink: 0; 
`;
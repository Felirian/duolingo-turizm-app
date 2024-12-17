import { Point } from '@/interfaces';
import { B1, Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import PointItem from './PointItem';

interface PointsProps {
  data: Point[];
}

const PONTS_COORDS = [
  { top: '27.71vw', left: '27.71vw' },
  { top: '51.71vw', left: '50vw' },
  { top: '84.29vw', left: '38.57vw' },
  { top: '116.86vw', left: '28.57vw' },
  { top: '143.71vw', left: '50.29vw' },
];

const Points = ({ data }: PointsProps) => {
  return (
    <PointsWr>
      <PointsTitleBlock>
        <Btn1>страна</Btn1>
        <B1>уровень</B1>
      </PointsTitleBlock>

      {data.map((point, index) => {
        return (
          <PointItem key={`${index}-point-item`} data={point} coordinates={PONTS_COORDS[index]} />
        );
      })}
    </PointsWr>
  );
};

//TODO КАРОЧЕ СВГ ЗАМЕНИТЬ И НАКИНУТЬ ДРОП ШЭДОУ, ПАДДИНГ ДЛЯ СКРОЛА СНИЗУ, ФИКС ТАЙТЛ,

const PointsWr = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding-bottom: 80vw;
`;

const PointsTitleBlock = styled.div`
  position: absolute;
  top: 5.71vw;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLORS.textGreen};
`;

export default Points;

import { Point } from '@/interfaces';
import { Btn1, Btn1Style } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import PointsSvgSelector from './PointsSvgSelector';

interface PointItemProps {
  data: Point;
  coordinates: { top: string; left: string };
}

const PointItem = ({ data, coordinates }: PointItemProps) => {
  return (
    <PointItemWr style={coordinates}>
      <PointBtn1>
        {data.number}
        <PointsSvgSelector name='point' />
      </PointBtn1>
    </PointItemWr>
  );
};

const PointItemWr = styled.button`
  position: absolute;
`;

const PointBtn1 = styled(Btn1)`
  position: relative;

  color: ${COLORS.white};
  font-size: 11.14vw;

  width: 100%;
  height: 100%;
`;

export default PointItem;

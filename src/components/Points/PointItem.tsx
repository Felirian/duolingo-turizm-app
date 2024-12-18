import { Point } from '@/interfaces';
import { Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import PointsSvgSelector from './PointsSvgSelector';
import { useRouter } from 'next/router';

interface PointItemProps {
  data: Point;
  coordinates: { top: string; left: string };
}

const PointItem = ({ data, coordinates }: PointItemProps) => {
  const router = useRouter();
  console.log(router);
  const handlePointClick = () => {
    router.push(router.asPath +'/'+ data.number);
  };

  return (
    <PointItemWr style={coordinates} onClick={handlePointClick}>
      <PointBtn1>
        <span> {data.number}</span>
        <PointsSvgSelector name='point' />
      </PointBtn1>
    </PointItemWr>
  );
};

const PointItemWr = styled.button`
  position: absolute;
  width: 22.57vw;
  height: 19.14vw;
  svg {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
  &:active {
    svg {
      ellipse {
        transition: 0.2s;
        fill: ${COLORS.heavyOrange};
      }
    }
  }
`;

const PointBtn1 = styled(Btn1)`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    z-index: 1;
    color: ${COLORS.white};
    font-size: 11.14vw;
    font-weight: inherit;
    font-family: inherit;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export default PointItem;

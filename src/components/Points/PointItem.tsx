import { Point } from '@/interfaces';
import { Btn1 } from '@/styles/textTags';
import { COLORS } from '@/styles/variables';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PointsSvgSelector from './PointsSvgSelector';
import { useRouter } from 'next/router';

interface PointItemProps {
  data: Point;
  coordinates: { top: string; left: string };
}

const PointItem = ({ data, coordinates }: PointItemProps) => {
  const router = useRouter();

  const handlePointClick = () => {
    router.push(router.asPath + '/' + data.number);
  };

  return (
    <PointItemWr
      style={coordinates}
      onClick={handlePointClick}
      data-aos='flip-up'
      data-aos-delay={data.number * 100}
      data-aos-duration='1000'
    >
      <PointBtn1>
        <span>{data.number}</span>
        <PointsSvgSelector name='point' />
      </PointBtn1>
    </PointItemWr>
  );
};

const PointItemWr = styled.button`
  position: absolute;
  width: 23vw;
  height: 20vw;

  z-index: 2;

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
    width: 99%;
    height: 99%;
    z-index: 0;

    filter: drop-shadow(0px 1.7vw 0px ${COLORS.mediumOrange})
      drop-shadow(0 0.8vw 0.8vw rgb(0, 0, 0, 0.25));
  }
`;

export default PointItem;
